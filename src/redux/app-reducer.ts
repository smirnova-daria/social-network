import { getAuthUserData } from "./auth-reducer.ts";
import { AppStateType, InferActionsTypes } from "./store-redux";
import { ThunkAction } from "redux-thunk";

const initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "app/INITIALIZE_SUCCESS":
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

//ActionCreators
export const actions = {
  initializedSuccess: () => ({ type: "app/INITIALIZE_SUCCESS" } as const)
}

//type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
//ThunkCreators
export const initializeApp = () => async (dispatch) => {
  dispatch(getAuthUserData()).then(() => {
    dispatch(actions.initializedSuccess());
  });
};

export default appReducer;
