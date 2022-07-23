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
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, login, email) => ({
  type: SET_AUTH_USER_DATA,
  data: { id, login, email },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.getAuthUserData().then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email));
      }
    });
  };
};

export default authReducer;
