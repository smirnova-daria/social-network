import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
