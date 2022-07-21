import { connect } from "react-redux";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
  setTotalUsersCountActionCreator,
  setCurrentPageActionCreator,
} from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersCountOnPage: state.usersPage.usersCountOnPage,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setTotalUsersCount: (totalUserCount) => {
      dispatch(setTotalUsersCountActionCreator(totalUserCount));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageActionCreator(page));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
