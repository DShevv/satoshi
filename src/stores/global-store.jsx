import UserStore from "./user-store";
import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import AuthService from "../services/AuthService";

class AuthStore {
  isAuthorized = false;
  token = null;
  refresh = null;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "AuthStore",
      properties: ["isAuthorized", "token", "refresh"],
      storage: window.localStorage,
    });
  }

  stopStore() {
    stopPersisting(this);
  }

  login = async (data) => {
    try {
      const res = await AuthService.login(data.email, data.password);
      console.log(res);
      if (res.status !== 200) {
        throw new Error(res);
      }

      localStorage.setItem("token", `Bearer ${res.data.access_token}`);
      localStorage.setItem("refresh", `Bearer ${res.data.refresh_token}`);

      runInAction(() => {
        this.token = `${res.data.token_type} ${res.data.access_token}`;
        this.refresh = `${res.data.token_type} ${res.data.refresh_token}`;

        this.isAuthorized = true;
      });
    } catch (error) {
      console.log(error.data);
    }
  };

  register = async (data) => {
    try {
      const res = await AuthService.register(data.email, data.password);

      if (res.status !== 200) {
        throw new Error(res);
      }

      console.log(res);
      return res.status;
    } catch (error) {
      console.log(error);
    }
  };

  refreshAccess = async () => {
    try {
      const res = await AuthService.refresh();

      console.log(res);
      if (res.status !== 200) {
        return res;
      }

      localStorage.setItem("token", `Bearer ${res.data.access_token}`);
      localStorage.setItem("refresh", `Bearer ${res.data.refresh_token}`);

      runInAction(() => {
        this.token = `${res.data.token_type} ${res.data.access_token}`;
        this.refresh = `${res.data.token_type} ${res.data.refresh_token}`;
      });

      return res;
    } catch (error) {
      return error;
    }
  };

  logout = () => {
    this.isAuthorized = false;
  };
}

class GlobalStore {
  userStore;
  authStore;

  constructor(authStore, userStore) {
    this.authStore = authStore;
    this.userStore = userStore;
  }

  stopStore() {
    this.authStore.stopStore();
    this.userStore.stopUserStore();
  }
}

const authStore = new AuthStore();
const userStore = new UserStore(authStore);

const globalStore = new GlobalStore(authStore, userStore);

export default globalStore;
