import { Dispatch } from "redux";
import { authAPI, securityAPI } from "../api/api";
import { AppStateType } from "./store-redux";
import { ThunkAction } from "redux-thunk";


const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

const initialState = {
  login: null as string | null,
  email: null as string | null,
  id: null as number | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    default:
      return state;
  }
};

type SetAuthUserDataActionType = {
  type: typeof SET_AUTH_USER_DATA,
  data: {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
  },
}
type SetCaptchaActionType = {
  type: typeof SET_CAPTCHA_URL,
  captchaUrl: string
}

type ActionsTypes = SetAuthUserDataActionType | SetCaptchaActionType


//ActionCreators
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_AUTH_USER_DATA,
  data: { id, login, email, isAuth },
});

export const setCaptcha = (captchaUrl: string): SetCaptchaActionType => ({
  type: SET_CAPTCHA_URL,
  captchaUrl,
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

//ThunkCreators
export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const data = await authAPI.getAuthUserData();
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any, setStatus: any): ThunkType => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      setStatus(data.messages);
    }
  };

export const logout = (): ThunkType => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  dispatch(setCaptcha(data.url));
};

export default authReducer;
