import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import UserService from "../services/UserService";

class UserStore {
  user = {
    name: undefined,
    email: undefined,
    id: undefined,
  };
  authStore;

  constructor(authStore) {
    this.authStore = authStore;

    makeAutoObservable(this);
    makePersistable(this, {
      name: "UserStore",
      properties: ["user"],
      storage: window.localStorage,
    });
  }

  stopUserStore() {
    stopPersisting(this);
  }

  getInfo = async () => {
    try {
      const res = await UserService.getInfo();

      if (res.response && res.response.status !== 200) {
        throw new Error(res);
      }

      console.log(res);

      runInAction(() => {
        this.user = {
          name: res.data.username,
          email: res.data.email,
          id: res.data.id,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    console.log("logout");
    this.user = {
      name: undefined,
      email: undefined,
      id: undefined,
    };
    this.authStore.logout();
  };
}

export default UserStore;
