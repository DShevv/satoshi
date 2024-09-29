import api from "../http";

export default class UserService {
  static async getInfo() {
    return api.get("/users/me", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async updateInfo(data) {
    return api.patch(
      "/users",
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
