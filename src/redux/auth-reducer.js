import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";

const initialState = {
  login: null,
  email: null,
  id: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, login, email, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  data: { id, login, email, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.getAuthUserData();
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login =
  (email, password, rememberMe, setStatus) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      setStatus(data.messages);
    }
  };
export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
