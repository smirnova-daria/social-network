import axios from "axios";
import { ProfileType, UserType } from '../types/types';

const axiosSettings = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "a509dad4-b880-4596-94a6-487c798a5517",
  },
});

type GetUsersType = {
  items: Array<UserType>
  totalCount: number,
  error: string | null
}

enum ResultCodes {
  Success = 0,
  Error = 1
}

enum ResultCodeWithCaptcha {
  Captcha = 10
}

type PutDeleteResponseType = {
  resultCode: ResultCodes
  messages: Array<string>
  data: {}
}

type AdditionalDataPhotoResponseType = {
  small: string
  large: string
}

type PhotoPutResponseType = {
  resultCode: ResultCodes
  messages: Array<string>
  data: AdditionalDataPhotoResponseType
}

type AdditionalDataMeResponseType = {
  id: number
  email: string
  login: string
}
type MeResponseType = {
  resultCode: ResultCodes
  messages: Array<string>
  data: AdditionalDataMeResponseType
}
type AdditionalDataLoginResponseType = {
  userId: number
}
type LoginResponseType = {
  resultCode: ResultCodes | ResultCodeWithCaptcha
  messages: Array<string>
  data: AdditionalDataLoginResponseType
}
type CaptchaResponseType = {
  url: string
}
export const usersAPI = {
  getUsers(usersCountOnPage: number, currentPage: number) {
    return axiosSettings
      .get<GetUsersType>(`users?count=${usersCountOnPage}&page=${currentPage}`)
      .then((res) => res.data);
  },

  unfollowUser(id: number) {
    return axiosSettings.delete<PutDeleteResponseType>(`follow/${id}`).then((res) => res.data);
  },

  followUser(id: number) {
    return axiosSettings.post<PutDeleteResponseType>(`follow/${id}`).then((res) => res.data);
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
      .put<PutDeleteResponseType>(`profile/status`, {
        status,
      })
      .then((res) => res.data);
  },
  savePhoto(file: any) {
    const formData = new FormData();
    formData.append("image", file);
    return axiosSettings
      .put<PhotoPutResponseType>(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
  saveProfile(profile: ProfileType) {
    return axiosSettings.put<PutDeleteResponseType>(`profile`, profile).then((res) => res.data);
  },
};

export const authAPI = {
  getAuthUserData() {
    return axiosSettings.get<MeResponseType>(`auth/me`).then((res) => res.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
    return axiosSettings
      .post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
      .then((res) => res.data);
  },
  logout() {
    return axiosSettings.delete<PutDeleteResponseType>(`auth/login`).then((res) => res.data);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return axiosSettings
      .get<CaptchaResponseType>(`security/get-captcha-url`)
      .then((res) => res.data);
  },
};
