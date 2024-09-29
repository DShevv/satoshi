import api from "../http";

export default class AuthService {
  static async login(email, password) {
    return api.post(
      "/users/token",
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
      "/users/register",
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

  static async refresh(token) {
    return api.post(`/users/refresh?refresh_token=${token}`, undefined, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
  }
}
