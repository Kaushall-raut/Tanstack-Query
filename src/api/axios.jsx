import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const get = () => {
  return api.get("posts");
};

//fetching single data

export const getSingle = async (id) => {
  const res = await api.get(`posts/${id}`);
  // console.log("res", res);

  return res.data;
};
