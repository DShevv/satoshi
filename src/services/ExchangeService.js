import api from "../http";

export default class ExchangeService {
  static async getCourseUsdt() {
    return api.get("/usdt", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async sendOfflineInfo(info) {
    return api.post(
      "/offline",
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
