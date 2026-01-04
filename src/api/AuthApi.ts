import api from "./Axios";

export const signup = async (data: any) => {
  const existing = await api.get(`/users?email=${data.email}`);
  if (existing.data.length > 0) {
    throw new Error("Email already exists");
  }

  const res = await api.post("/users", data);
  return res.data;
};

export const login = async (email: string, password: string) => {
  const res = await api.get(`/users?email=${email}&password=${password}`);
  if (res.data.length === 0) throw new Error("Invalid credentials");
  return res.data[0];
};
