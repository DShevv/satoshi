import UserStore from "./user-store";
import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import AuthService from "../services/AuthService";
import { toast } from "react-toastify";
import Notification from "../components/Notification/Notification";
import NotificationStore from "./notificatoon-store";
import ExchangeStore from "./exchange-store";

const notificationStore = new NotificationStore();
const exchangeStore = new ExchangeStore();

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
        notificationStore.setNotification("error", "Введены неверные данные");
        toast(<Notification text={"Введены неверные данные"} type={"error"} />);
        return res;
      }

      notificationStore.setNotification("success", "Вход прошёл успешно");
      toast(<Notification text={"Вход прошёл успешно"} type={"success"} />);
      localStorage.setItem("token", `Bearer ${res.data.access_token}`);
      localStorage.setItem("refresh", `${res.data.refresh_token}`);

      runInAction(() => {
        this.token = `Bearer ${res.data.access_token}`;
        this.refresh = `${res.data.refresh_token}`;

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
        notificationStore.setNotification("error", "Email уже зарегистрирован");
        toast(
          <Notification text={"Email уже зарегистрирован"} type={"error"} />
        );
        return res;
      }

      notificationStore.setNotification(
        "success",
        "Регистрация прошла успешно"
      );
      toast(
        <Notification text={"Регистрация прошла успешно"} type={"success"} />
      );

      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  refreshAccess = async () => {
    try {
      const res = await AuthService.refresh(this.refresh);

      console.log(res);
      if (res.status !== 200) {
        return undefined;
      }

      localStorage.setItem("token", `Bearer ${res.data.access_token}`);

      runInAction(() => {
        this.token = `${res.data.token_type} ${res.data.access_token}`;
      });

      return `Bearer ${res.data.access_token}`;
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
  notificationStore;
  exchangeStore;

  constructor(authStore, userStore, notificationStore, exchangeStore) {
    this.authStore = authStore;
    this.userStore = userStore;
    this.notificationStore = notificationStore;
    this.exchangeStore = exchangeStore;
  }

  stopStore() {
    this.authStore.stopStore();
    this.userStore.stopUserStore();
    this.exchangeStore.stopExchangeStore();
  }
}

const authStore = new AuthStore();
const userStore = new UserStore(authStore, notificationStore);

const globalStore = new GlobalStore(
  authStore,
  userStore,
  notificationStore,
  exchangeStore
);

export default globalStore;
