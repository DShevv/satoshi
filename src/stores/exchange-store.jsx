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
  isSell = 1;
  canPass = false;
  id;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "ExchangeStore",
      properties: ["from", "to", "course", "canPass", "isSell"],
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

  setId = (id) => {
    try {
      this.id = id;
    } catch (error) {
      console.log(error);
    }
  };

  setSell = (value) => {
    this.isSell = value;
  };

  setCanPass = (value) => {
    this.canPass = value;
    if (!value) {
      this.from = {
        currency: undefined,
        amount: 0,
      };
      this.to = {
        currency: undefined,
        amount: 0,
      };
    }
  };

  updateCourse = (value) => {
    try {
      this.course = value;

      if (this.isSell) {
        this.to = {
          ...this.to,
          amount: toFixedIfNecessary(value.in * this.from.amount),
        };
      } else {
        this.from = {
          ...this.from,
          amount: toFixedIfNecessary(value.out * this.to.amount),
        };
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default ExchangeStore;
