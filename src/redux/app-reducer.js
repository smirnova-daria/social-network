import { getAuthUserData } from "./auth-reducer";

const INITIALIZE_SUCCESS = "INITIALIZE_SUCCESS";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const initializedSuccess = () => ({ type: INITIALIZE_SUCCESS });

export const initializeApp = () => (dispatch) => {
  dispatch(getAuthUserData()).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
