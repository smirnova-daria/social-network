import axios from "axios";

const axiosSettings = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "a509dad4-b880-4596-94a6-487c798a5517",
  },
});

export const usersAPI = {
  getUsers(usersCountOnPage, currentPage) {
    return axiosSettings
      .get(`users?count=${usersCountOnPage}&page=${currentPage}`)
      .then((res) => res.data);
  },

  unfollowUser(id) {
    return axiosSettings.delete(`follow/${id}`).then((res) => res.data);
  },

  followUser(id) {
    return axiosSettings.post(`follow/${id}`).then((res) => res.data);
  },
};

export const profileAPI = {
  getProfile(id) {
    return axiosSettings.get(`profile/${id}`).then((res) => res.data);
  },
  getStatus(id) {
    return axiosSettings.get(`profile/status/${id}`).then((res) => res.data);
  },
  updateStatus(status) {
    return axiosSettings
      .put(`profile/status`, {
        status,
      })
      .then((res) => res.data);
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append("image", file);
    return axiosSettings
      .put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
};

export const authAPI = {
  getAuthUserData() {
    return axiosSettings.get(`auth/me`).then((res) => res.data);
  },
  login(email, password, rememberMe = false) {
    return axiosSettings
      .post(`auth/login`, { email, password, rememberMe })
      .then((res) => res.data);
  },
  logout() {
    return axiosSettings.delete(`auth/login`).then((res) => res.data);
  },
};
