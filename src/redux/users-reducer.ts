import { usersAPI } from "../api/api.ts";
import { UserType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from '../redux/store-redux'
import { Dispatch } from "redux";

const initialState = {
  users: [] as Array<UserType>,
  usersCountOnPage: 50,
  currentPage: 1,
  totalUsersCount: 0,
  isFetching: true,
  followingProgress: [] as Array<number> //Array of userId
};

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "users/FOLLOW":
      return {
        ...state,
        users: [...state.users].map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "users/UNFOLLOW":
      return {
        ...state,
        users: [...state.users].map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "users/SET_USERS":
      return {
        ...state,
        users: action.users,
      };
    case "users/SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.page,
      };
    case "users/SET_TOTAL_USERS_COUNT":
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case "users/TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case "users/TOGGLE_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.id]
          : state.followingProgress.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};

//ActionCreators
export const actions = {
  followSuccess: (userId: number) => ({ type: "users/FOLLOW", userId } as const),
  unfollowSuccess: (userId: number) => ({ type: "users/UNFOLLOW", userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: "users/SET_USERS", users } as const),
  setCurrentPage: (page: number) => ({ type: "users/SET_CURRENT_PAGE", page } as const),
  setTotalUsersCount: (totalUsersCount: number) => ({ type: "users/SET_TOTAL_USERS_COUNT", totalUsersCount } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: "users/TOGGLE_IS_FETCHING", isFetching } as const),
  toggleFollowingProgress: (isFetching: boolean, id: number) => ({ type: "users/TOGGLE_FOLLOWING_PROGRESS", isFetching, id } as const)
}

//ThunkCreators
export const fetchUsers =
  (usersCountOnPage: number, currentPage: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(currentPage));
    const data = await usersAPI.getUsers(usersCountOnPage, currentPage);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };

const followUnfollowFlow = async (
  dispatch: Dispatch<ActionsType>,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsType
) => {
  dispatch(actions.toggleFollowingProgress(true, userId));

  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.followUser.bind(usersAPI),
    actions.followSuccess
  );
};

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollowUser.bind(usersAPI),
    actions.unfollowSuccess
  );
};

export default usersReducer;
type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>