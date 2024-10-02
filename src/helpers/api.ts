import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postLogin = async (email: string, password: string) => {
  const URL = API_URL + "/session/login";
  const method = "post";
  const result = await axios[method](URL, { email, password })
    .then((res) => res)
    .catch((res) => {
      return res;
    });
  return result;
};
