import axios from "axios";
const baseURL = "https://red-onion-backend.vercel.app";

const headers = {
  "content-type": "application/json",
  accept: "application/json",
};

const token = localStorage.getItem("token");

if (token) {
  headers.authorization = `Bearer ${token}`;
}

// create an axios instance some basic
export const axiosInstance = axios.create({
  baseURL,
  headers,
});

const axiAuth = {
  headers,
};
