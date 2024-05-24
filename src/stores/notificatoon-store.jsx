import { makeAutoObservable } from "mobx";

class NotificationStore {
  notifications = [];
  lastId = 0;

  constructor(authStore) {
    this.authStore = authStore;

    makeAutoObservable(this);
  }

  setNotification = (type, text) => {
    this.notifications.push({ type, text, id: this.lastId });
    this.lastId += 1;
  };

  removeNotification = (id) => {
    this.notifications = this.notifications.filter((noti) => noti.id !== id);
  };
}

export default NotificationStore;
