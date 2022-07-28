import React from "react";
import { connect } from "react-redux";
import { unfollow, follow, fetchUsers } from "../../redux/users-reducer";
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getTotalUsersCount,
  getUsers,
  getUsersCountOnPage,
} from "../../redux/users-selectors";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.usersCountOnPage, this.props.currentPage);
  }

  onPageChanged = (p) => {
    this.props.fetchUsers(this.props.usersCountOnPage, p);
  };

  render() {
    return <Users {...this.props} onPageChanged={this.onPageChanged} />;
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    usersCountOnPage: getUsersCountOnPage(state),
    currentPage: getCurrentPage(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  };
};

export default connect(mapStateToProps, {
  unfollow,
  follow,
  fetchUsers,
})(UsersContainer);
