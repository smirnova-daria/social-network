import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store-redux";
import { FilterType } from "../../redux/users-reducer";
import { unfollow, follow, fetchUsers } from "../../redux/users-reducer.ts";
import { getUsersFilter } from "../../redux/users-selectors.ts";
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getTotalUsersCount,
  getUsers,
  getUsersCountOnPage,
} from "../../redux/users-selectors.ts";
import { UserType } from "../../types/types";
import Users from "./Users.tsx";

type MapStatePropsType = {
  users: Array<UserType>
  usersCountOnPage: number
  currentPage: number
  totalUsersCount: number
  isFetching: boolean
  followingProgress: Array<number>
  filter: FilterType
}

type MapDispatchPropsType = {
  fetchUsers: (usersCountOnPage: number, currentPage: number, filter: FilterType) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.fetchUsers(this.props.usersCountOnPage, this.props.currentPage, this.props.filter);
  }

  onPageChanged = (pageNumber: number): void => {
    this.props.fetchUsers(this.props.usersCountOnPage, pageNumber, this.props.filter);
  };

  onFilterChanged = (filter: FilterType) => {
    const { usersCountOnPage } = this.props
    this.props.fetchUsers(usersCountOnPage, 1, filter)
  }

  render() {
    return <Users {...this.props} onPageChanged={this.onPageChanged} onFilterChanged={this.onFilterChanged} />;
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    usersCountOnPage: getUsersCountOnPage(state),
    currentPage: getCurrentPage(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
    filter: getUsersFilter(state)
  };
};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
  unfollow,
  follow,
  fetchUsers,
})(UsersContainer);
