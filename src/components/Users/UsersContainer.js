import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
  setTotalUsersCountActionCreator,
  setCurrentPageActionCreator,
} from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=1`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=${p}`
      )
      .then((res) => this.props.setUsers(res.data.items));
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
