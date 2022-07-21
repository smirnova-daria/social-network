import { connect } from "react-redux";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
