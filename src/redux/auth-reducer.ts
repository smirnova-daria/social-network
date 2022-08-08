import { authAPI, securityAPI } from "../api/api.ts";
import { BaseThunkType, InferActionsTypes } from "./store-redux";

const initialState = {
  login: null as string | null,
  email: null as string | null,
  id: null as number | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "auth/SET_AUTH_USER_DATA":
      return {
        ...state,
        ...action.data,
      };
    case "auth/SET_CAPTCHA_URL":
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    default:
      return state;
  }
};

//ActionCreators
export const actions = {
  setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: "auth/SET_AUTH_USER_DATA",
    data: { id, login, email, isAuth },
  } as const),
  setCaptcha: (captchaUrl: string) => ({
    type: "auth/SET_CAPTCHA_URL",
    captchaUrl,
  } as const)
}

//ThunkCreators
export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const data = await authAPI.getAuthUserData();
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(actions.setAuthUserData(id, login, email, true));
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
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  dispatch(actions.setCaptcha(data.url));
};

export default authReducer;

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>