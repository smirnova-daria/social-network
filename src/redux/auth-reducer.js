import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

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

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.getAuthUserData().then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};
export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
