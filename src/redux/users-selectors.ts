import { AppStateType } from "./store-redux";

export const getUsers = (state: AppStateType) => {
  return state.usersPage.users;
};
export const getUsersCountOnPage = (state: AppStateType) => {
  return state.usersPage.usersCountOnPage;
};
export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};
export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};
export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};
export const getFollowingProgress = (state: AppStateType) => {
  return state.usersPage.followingProgress;
};
export const getUsersFilter = (state: AppStateType) => {
  return state.usersPage.filter;
}