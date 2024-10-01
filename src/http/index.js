import axios from "axios";
import globalStore from "../stores/global-store";

const api = axios.create({
  //withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": true,
  },
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  if (config.headers.Authorization === undefined) {
    config.headers.Authorization = localStorage.getItem("token");
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const reqConfig = error.config;

    if (
      error.response.status === 401 &&
      !reqConfig._retry &&
      !reqConfig.url.includes("/refresh")
    ) {
      reqConfig._retry = true;
      console.log("start");
      const newToken = await globalStore.authStore.refreshAccess();
      console.log(newToken);
      if (!newToken) {
        globalStore.userStore.logout();
        return error;
      }
      reqConfig.headers.Authorization = newToken;
      return api(reqConfig);
    } else if (
      error.response.status === 401 &&
      reqConfig.url.includes("/refresh")
    ) {
      globalStore.userStore.logout();
      return error;
    }

    return error;
  }
);

export default api;
