import { getToken } from "../auth";
import axios from "axios";

// Function to get the theme from local storage
const getTheme = () => {
  return localStorage.getItem("light") ? "light" : "dark";
};

export const BASE_URL = "http://localhost:8080/";

export const myAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Initial theme header
    "X-Theme": getTheme(),
  },
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
