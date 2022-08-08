import { profileAPI } from "../api/api.ts";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./store-redux";

const initialState = {
  posts: [
    { id: 1, message: "Hey, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 12 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "profile/ADD-POST":
      const newPost = {
        id: 6,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case "profile/SET_PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    case "profile/SET_STATUS":
      return {
        ...state,
        status: action.statusText,
      };
    case "profile/DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case "profile/SAVE_PHOTO_SUCCESS":
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };
    default:
      return state;
  }
};

//ActionCreators
export const actions = {
  addPostActionCreator: (newPostText: string) => ({ type: "profile/ADD-POST", newPostText } as const),
  setProfile: (profile: ProfileType) => ({ type: "profile/SET_PROFILE", profile } as const),
  setStatus: (statusText: string) => ({ type: "profile/SET_STATUS", statusText } as const),
  deletePost: (postId: number) => ({ type: "profile/DELETE_POST", postId } as const),
  savePhotoSuccess: (photos: PhotosType) => ({ type: "profile/SAVE_PHOTO_SUCCESS", photos } as const)
}

//ThunkCreators 
export const getProfile = (userId: number): ThunkType => async (dispatch) => {
  profileAPI.getProfile(userId).then((data) => {
    dispatch(actions.setProfile(data));
  });
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(actions.setStatus(data));
};

export const updateStatus = (statusText: string): ThunkType => async (dispatch) => {
  const data = await profileAPI.updateStatus(statusText);
  if (data.resultCode === 0) {
    dispatch(actions.setStatus(statusText));
  }
};
export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos));
  }
};

export const saveProfile =
  (profile: ProfileType, setStatus: any): ThunkType => async (dispatch, getState) => {
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

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>