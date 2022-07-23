import axios from "axios";

const usersSettings = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "a509dad4-b880-4596-94a6-487c798a5517",
  },
});

export const usersAPI = {
  getUsers(usersCountOnPage, currentPage) {
    return usersSettings
      .get(`users?count=${usersCountOnPage}&page=${currentPage}`)
      .then((res) => res.data);
  },

  unfollowUser(id) {
    return usersSettings.delete(`follow/${id}`).then((res) => res.data);
  },

  followUser(id) {
    return usersSettings.post(`follow/${id}`).then((res) => res.data);
  },
};
