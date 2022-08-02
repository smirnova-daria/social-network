import { getAuthUserData } from "./auth-reducer.ts";

const INITIALIZE_SUCCESS = "app/INITIALIZE_SUCCESS";

const initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: any): InitialStateType => {
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

export type InitializedSuccessType = {
  type: typeof INITIALIZE_SUCCESS
}
const initializedSuccess = (): InitializedSuccessType => ({ type: INITIALIZE_SUCCESS });

export const initializeApp = () => (dispatch: any) => {
  dispatch(getAuthUserData()).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
