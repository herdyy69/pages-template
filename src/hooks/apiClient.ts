import { APP_CONFIG } from "@/config/app";
import axios from "axios";

// use this if you need a access token
const apiClient = axios.create({
  baseURL: APP_CONFIG.API_URL,
  paramsSerializer: {
    indexes: null,
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
