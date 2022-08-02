import { profileAPI } from "../api/api";

const ADD_POST = "profile/ADD-POST";
const UPDATE_POST_TEXT = "profile/UPDATE-POST-TEXT";
const SET_PROFILE = "profile/SET_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const UPDATE_STATUS = "profile/UPDATE_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

const initialState = {
  posts: [
    { id: 1, message: "Hey, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 12 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 6,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const setStatus = (statusText) => ({ type: SET_STATUS, statusText });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setProfile(data));
    });
  };
};

export const getStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (statusText) => async (dispatch) => {
  const data = await profileAPI.updateStatus(statusText);
  if (data.resultCode === 0) {
    dispatch(setStatus(statusText));
  }
};
export const savePhoto = (file) => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getProfile(userId));
  } else {
    return Promise.reject(data.messages[0]);
  }
};
export default profileReducer;
