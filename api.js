import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Signup
export const signup = async (data) => {
  try {
    const res = await API.post("/signup", data);
    return res.data;
  } catch (err) {
    return { error: err.response?.data?.message || err.message };
  }
};

// Login
export const login = async (data) => {
  try {
    const res = await API.post("/login", data);
    return res.data;
  } catch (err) {
    return { error: err.response?.data?.message || err.message };
  }
};

// Forgot Password
export const forgotPassword = async (data) => {
  try {
    const res = await API.post("/forgot-password", data);
    return res.data;
  } catch (err) {
    return { error: err.response?.data?.message || err.message };
  }
};

// Get Logged-in User Info
export const getUser = async () => {
  try {
    const res = await API.get("/user");
    return res.data;
  } catch (err) {
    return { error: err.response?.data?.message || err.message };
  }
};
