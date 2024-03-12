import api from "../http";

export default async function getRefreshToken() {
  try {
    const res = await api.get("/token");
    const data = await res.json();
    localStorage.setItem("token", data.refreshToken);
    return data.refreshToken;
  } catch (error) {
    console.log(error);
  }
}
