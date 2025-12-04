// lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.warn("API Error:", error.response.status, error.response.data);
    }
    return Promise.reject(error);
  },
);

export const errorHandler = (error: any) => {
  return {
    error: error?.response?.data?.message || "Something went wrong",
  };
};

export default api;
