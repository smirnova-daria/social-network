import { createStore, combineReducers, applyMiddleware, compose, Action } from "redux";
import authReducer from "./auth-reducer.ts";
import dialogsReducer from "./dialogs-reducer.ts";
import navbarReducer from "./navbar-reducer.ts";
import profileReducer from "./profile-reducer.ts";
import usersReducer from "./users-reducer.ts";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import appReducer from "./app-reducer.ts";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
//@ts-ignore
window.store = store;
