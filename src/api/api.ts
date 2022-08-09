import axios from "axios";
import { PhotosType, ProfileType, UserType } from '../types/types';

const axiosSettings = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "a509dad4-b880-4596-94a6-487c798a5517",
  },
});


enum ResultCodes {
  Success = 0,
  Error = 1
}

enum ResultCodeWithCaptcha {
  Captcha = 10
}

type APIResponseType<D = {}, RC = ResultCodes> = {
  data: D
  messages: Array<string>
  resultCode: RC
}

type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}


type SavePhotoResponseDataType = {
  photos: PhotosType
}

type MeResponseDataType = {
  id: number
  email: string
  login: string
}

type LoginResponseDataType = {
  userId: number
}

type CaptchaResponseType = {
  url: string
}
export const usersAPI = {
  getUsers(usersCountOnPage: number = 10, currentPage: number = 1, term: string = '', friend: null | boolean = null) {
    return axiosSettings
      .get<GetItemsType>(`users?count=${usersCountOnPage}&page=${currentPage}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
      .then((res) => res.data);
  },

  unfollowUser(id: number) {
    return axiosSettings.delete(`follow/${id}`).then((res) => res.data);
  },

  followUser(id: number) {
    return axiosSettings.post<APIResponseType>(`follow/${id}`).then((res) => res.data);
  },
};

export const profileAPI = {
  getProfile(id: number) {
    return axiosSettings.get<ProfileType>(`profile/${id}`).then((res) => res.data);
  },
  getStatus(id: number) {
    return axiosSettings.get<string>(`profile/status/${id}`).then((res) => res.data);
  },
  updateStatus(status: string) {
    return axiosSettings
      .put<APIResponseType>(`profile/status`, {
        status,
      })
      .then((res) => res.data);
  },
  savePhoto(file: File) {
    const formData = new FormData();
    formData.append("image", file);
    return axiosSettings
      .put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
  saveProfile(profile: ProfileType) {
    return axiosSettings.put<APIResponseType>(`profile`, profile).then((res) => res.data);
  },
};

export const authAPI = {
  getAuthUserData() {
    return axiosSettings.get<APIResponseType<MeResponseDataType>>(`auth/me`).then((res) => res.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
    return axiosSettings
      .post<APIResponseType<LoginResponseDataType, ResultCodes | ResultCodeWithCaptcha>>(`auth/login`, { email, password, rememberMe, captcha })
      .then((res) => res.data);
  },
  logout() {
    return axiosSettings.delete(`auth/login`).then((res) => res.data);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return axiosSettings
      .get<CaptchaResponseType>(`security/get-captcha-url`)
      .then((res) => res.data);
  },
};
