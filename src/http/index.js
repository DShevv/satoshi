import axios from "axios";
import getRefreshToken from "../utils/getRefreshToken";

const api = axios.create({
  // withCredentials: true,
  headers: { "Access-Control-Allow-Credentials": true },
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  //config.headers.Authorization = localStorage.getItem("token");
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const reqConfig = error.config;
    if (error.response.status === 401 && !reqConfig._retry) {
      reqConfig._retry = true;
      const newToken = await getRefreshToken();
      reqConfig.headers.Authorization = `Bearer ${newToken}`;
      return api(reqConfig);
    }
    return error;
  }
);

export default api;
