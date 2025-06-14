import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const get = () => {
  return api.get("posts");
};
