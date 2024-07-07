import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import ExchangeService from "../services/ExchangeService";
import toFixedIfNecessary from "../utils/toFixedIfNecessary";

class ExchangeStore {
  from = {
    currency: undefined,
    amount: 0,
  };
  to = {
    currency: undefined,
    amount: 0,
  };
  course = { in: 1, out: 1 };
  isSell = true;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "ExchangeStore",
      properties: ["from", "to", "course"],
      storage: window.localStorage,
    });
  }

  stopExchangeStore() {
    stopPersisting(this);
  }

  setFrom = (currency, amount) => {
    try {
      this.from = { currency, amount };
    } catch (error) {
      console.log(error);
    }
  };

  setTo = (currency, amount) => {
    try {
      this.to = { currency, amount };
    } catch (error) {
      console.log(error);
    }
  };

  setSell = (value) => {
    this.isSell = value;
  };

  updateCourse = async () => {
    try {
      const res = await ExchangeService.getCourseUsdt();

      runInAction(() => {
        this.course = res.data;
        if (this.isSell) {
          this.to = {
            ...this.to,
            amount: toFixedIfNecessary(res.data.in * this.from.amount),
          };
        } else {
          this.from = {
            ...this.from,
            amount: toFixedIfNecessary(res.data.out * this.to.amount),
          };
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default ExchangeStore;
