import { Dispatch } from "redux";
import { profileAPI } from "../api/api.ts";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { AppStateType } from "./store-redux";
import { ThunkAction } from "redux-thunk";


const ADD_POST = "profile/ADD-POST";
const SET_PROFILE = "profile/SET_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

const initialState = {
  posts: [
    { id: 1, message: "Hey, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 12 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

type InitialStateType = typeof initialState


const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };
    default:
      return state;
  }
};

type AddPostActionType = {
  type: typeof ADD_POST
  newPostText: string
}
type SetProfileActionType = {
  type: typeof SET_PROFILE
  profile: ProfileType
}
type SetStatusActionType = {
  type: typeof SET_STATUS
  statusText: string
}
type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}

type ActionsTypes = AddPostActionType | SetProfileActionType
  | SetStatusActionType | DeletePostActionType
  | SavePhotoSuccessActionType

//ActionCreators
export const addPostActionCreator = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText });
export const setProfile = (profile: ProfileType): SetProfileActionType => ({ type: SET_PROFILE, profile });
export const setStatus = (statusText: string): SetStatusActionType => ({ type: SET_STATUS, statusText });
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos });

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

//ThunkCreators 
export const getProfile = (userId: number): ThunkType => async (dispatch) => {
  profileAPI.getProfile(userId).then((data) => {
    dispatch(setProfile(data));
  });
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (statusText: string): ThunkType => async (dispatch) => {
  const data = await profileAPI.updateStatus(statusText);
  if (data.resultCode === 0) {
    dispatch(setStatus(statusText));
  }
};
export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};

export const saveProfile =
  (profile: ProfileType, setStatus: any): ThunkType => async (dispatch, getState: GetStateType) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
      dispatch(getProfile(userId));
    } else {
      setStatus(data.messages[0]);
      return Promise.reject(data.messages[0]);
    }
  };
export default profileReducer;
