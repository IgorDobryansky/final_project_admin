import axios from "axios";

const API_URL = "https://final-project-fe-10.onrender.com/api";

const api = axios.create({
  mode: "no-cors",
  baseURL: API_URL
});

api.interceptors.request.use((config) => {
  const newConfig = config;
  newConfig.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return newConfig;
});

export default api;
