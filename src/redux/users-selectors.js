export const getUsers = (state) => {
  return state.usersPage.users;
};
export const getUsersCountOnPage = (state) => {
  return state.usersPage.usersCountOnPage;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getFollowingProgress = (state) => {
  return state.usersPage.followingProgress;
};
