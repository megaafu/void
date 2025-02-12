import axios from "axios";

const baseUrl = "https://sonil-dev.void.co.mz/api/v4";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});
const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
if (token) {
  axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default axiosInstance;
