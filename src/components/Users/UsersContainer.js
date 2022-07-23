import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import {
  unfollow,
  follow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching,
} from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.usersCountOnPage, this.props.currentPage)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.usersCountOnPage, p).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.usersCountOnPage
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      if (i === 50) {
        break;
      }
      pages.push(i);
    }

    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        usersCountOnPage={this.props.usersCountOnPage}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersCountOnPage: state.usersPage.usersCountOnPage,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  unfollow,
  follow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching,
})(UsersContainer);
