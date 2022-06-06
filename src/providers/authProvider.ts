import { AuthProvider } from "react-admin";

localStorage.setItem("username", "Jane Doe");

export const authProvider: AuthProvider = {
  login: ({ username }) => {
    localStorage.setItem("username", username);
    // accept all username/password combinations
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => Promise.reject("Unknown method"),
  getIdentity: () =>
    Promise.resolve({
      id: 0,
      fullName: "admin",
      avatar: "https://picsum.photos/seed/picsum/200/300",
    }),
};
