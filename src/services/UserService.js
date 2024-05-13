import api from "../http";

export default class UserService {
  static async getInfo() {
    return api.get("/users/me/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
