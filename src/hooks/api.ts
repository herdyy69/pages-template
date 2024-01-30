import { APP_CONFIG } from "@/config/app";
import axios from "axios";

// general api
const api = axios.create({
  baseURL: APP_CONFIG.API_URL,
  paramsSerializer: {
    indexes: null,
  },
});

export default api;
