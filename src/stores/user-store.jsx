import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import UserService from "../services/UserService";
import Notification from "../components/Notification/Notification";

class UserStore {
  user = {
    name: "",
    lastName: "",
    patronymic: "",
    email: "",
    id: undefined,
    orders: undefined,
  };
  authStore;
  notificationStore;

  constructor(authStore, notificationStore) {
    this.authStore = authStore;
    this.notificationStore = notificationStore;

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
          name: res.data.first_name,
          email: res.data.email,
          lastName: res.data.last_name,
          patronymic: res.data.patronymic,
          id: res.data.id,
          is_active: res.data.is_active,
          orders: res.data.orders,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    console.log("logout");
    this.user = {
      name: "",
      lastName: "",
      patronymic: "",
      email: "",
      id: undefined,
    };
    this.authStore.logout();
  };

  update = async (data) => {
    try {
      const res = await UserService.updateInfo(data);
      console.log(res);

      if (res.status !== 200 && res.response?.status !== 200) {
        this.notificationStore.setNotification(
          "error",
          "Не удалось сохранить изменения"
        );

        return res;
      }

      this.notificationStore.setNotification("success", "Изменения применены");

      runInAction(() => {
        this.user = {
          name: res.data.first_name,
          email: res.data.email,
          lastName: res.data.last_name,
          patronymic: res.data.patronymic,
          id: res.data.id,
          is_active: res.data.is_active,
          orders: res.data.orders,
        };
      });
    } catch (error) {
      console.log(error.data);
    }
  };
}

export default UserStore;
