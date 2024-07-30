import api from "../http";

export default class ExchangeService {
  static async getCourseUsdt() {
    return api.get("/usdt", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async sendInfo(info) {
    return api.post(
      "/exchange",
      {
        ...info,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  static async sendOnlineInfo(info) {
    return api.post(
      "/exchange/online",
      {
        ...info,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
