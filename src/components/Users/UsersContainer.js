import axios from "axios";
import React from "react";
import { connect } from "react-redux";
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
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=1`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=${p}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(res.data.items);
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
