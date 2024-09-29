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
      "/orders",
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
