import { makeAutoObservable } from "mobx";
import { makePersistable, stopPersisting } from "mobx-persist-store";

class ExchangeStore {
  from = {
    currency: undefined,
    amount: 0,
  };
  to = {
    currency: undefined,
    amount: 0,
  };

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "ExchangeStore",
      properties: ["from", "to"],
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
}

export default ExchangeStore;
