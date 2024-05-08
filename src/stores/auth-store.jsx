import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import AuthService from "../services/AuthService";

class AuthStore {
  isAuthorized = false;
  token = null;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "AuthStore",
      properties: ["isAuthorized"],
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

      runInAction(() => {
        this.isAuthorized = true;
      });
    } catch (error) {
      console.log(error.data);
    }
  };

  register = async (data) => {
    try {
      const res = await AuthService.register(
        data.name,
        data.email,
        data.password,
        data.invite_code
      );

      if (res.status !== 200) {
        throw new Error(res);
      }

      console.log(res);
      return res.status;
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    this.isAuthorized = false;
  };
}

export default AuthStore;
