import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const get = (pageNumber) => {
  // console.log("page", pageNumber);

  return api.get(`posts?_start=${pageNumber}&_limit=3`);
};

//fetching single data

export const getSingle = async (id) => {
  const res = await api.get(`posts/${id}`);
  // console.log("res", res);

  return res.data;
};

//delete data

export const deleteData = (id) => {
  return api.delete(`posts/${id}`);
};

//update data
export const updateData = (id) => {
  return api.put(`posts/${id}`, { title: "data updated" });
};
