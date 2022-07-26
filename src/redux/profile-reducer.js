import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "Hey, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 12 },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.statusText,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text,
});
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

const setStatus = (statusText) => ({ type: SET_STATUS, statusText });

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (statusText) => {
  return (dispatch) => {
    profileAPI.updateStatus(statusText).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(statusText));
      }
    });
  };
};

export default profileReducer;
