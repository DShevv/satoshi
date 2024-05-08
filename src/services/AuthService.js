import api from "../http";

export default class AuthService {
  static async login(email, password) {
    return api.post(
      "/token",
      {
        username: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  }

  static async register(email, password) {
    return api.post(
      "/register",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  static async refresh() {
    return api.post("/refresh");
  }
}
