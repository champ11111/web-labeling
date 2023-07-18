import api from "./api";

interface UserData {
  id: string;
  username: string;
  email: string;
}

export const getUser = (userId: string) => {
  return api.get(`/users/${userId}`);
};

export const createUser = (userData: UserData) => {
  return api.post("/users", userData);
};

export const updateUser = (userId: string, userData: UserData) => {
  return api.put(`/users/${userId}`, userData);
};

export const deleteUser = (userId: string) => {
  return api.delete(`/users/${userId}`);
};
