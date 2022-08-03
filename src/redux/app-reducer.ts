import { getAuthUserData } from "./auth-reducer.ts";
import { AppStateType } from "./store-redux";
import { ThunkAction } from "redux-thunk";

const INITIALIZE_SUCCESS = "app/INITIALIZE_SUCCESS";

const initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

type ActionsTypes = InitializedSuccessType

//ActionCreators
const initializedSuccess = (): InitializedSuccessType => ({ type: INITIALIZE_SUCCESS });

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
//ThunkCreators
export const initializeApp = (): ThunkType => async (dispatch) => {
  dispatch(getAuthUserData()).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
