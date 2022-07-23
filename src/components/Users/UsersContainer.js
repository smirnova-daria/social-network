import React from "react";
import { connect } from "react-redux";
import { unfollow, follow, getUsers } from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.usersCountOnPage, this.props.currentPage);
  }

  onPageChanged = (p) => {
    this.props.getUsers(this.props.usersCountOnPage, p);
  };

  render() {
    return <Users {...this.props} onPageChanged={this.onPageChanged} />;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersCountOnPage: state.usersPage.usersCountOnPage,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
  };
};

export default connect(mapStateToProps, {
  unfollow,
  follow,
  getUsers,
})(UsersContainer);
