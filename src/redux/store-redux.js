import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./auth-reducer.ts";
import dialogsReducer from "./dialogs-reducer.ts";
import navbarReducer from "./navbar-reducer.ts";
import profileReducer from "./profile-reducer.ts";
import usersReducer from "./users-reducer.ts";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer.ts";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware))
);

// export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
