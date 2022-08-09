import React from "react";
import Preloader from "../UI/Preloader/Preloader";
import Paginator from "./Paginator/Paginator.tsx";
import User from "./User/User.tsx";
import s from "./Users.module.css";
import { fetchUsers, FilterType, follow, unfollow } from "../../redux/users-reducer.ts";
import { UsersSearchForm } from "./UserSearchForm.tsx";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingProgress, getIsFetching, getTotalUsersCount, getUsers, getUsersCountOnPage, getUsersFilter } from '../../redux/users-selectors.ts'
import { useEffect } from "react";

type PropsType = {

};

const Users: React.FC<PropsType> = (props) => {

  const users = useSelector(getUsers)
  const usersCountOnPage = useSelector(getUsersCountOnPage)
  const currentPage = useSelector(getCurrentPage)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const isFetching = useSelector(getIsFetching)
  const followingProgress = useSelector(getFollowingProgress)
  const filter = useSelector(getUsersFilter)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers(usersCountOnPage, currentPage, filter));
  }, [])

  const onPageChanged = (pageNumber: number): void => {
    dispatch(fetchUsers(usersCountOnPage, pageNumber, filter));
  };

  const onFilterChanged = (filter: FilterType) => {
    dispatch(fetchUsers(usersCountOnPage, 1, filter))
  }

  const followUser = (userId: number) => {
    dispatch(follow(userId));
  }
  const unfollowUser = (userId: number) => {
    dispatch(unfollow(userId));
  }

  return (
    <div>
      {isFetching ? <Preloader /> : null}
      <UsersSearchForm onFilterChanged={onFilterChanged} />
      <Paginator
        totalItemsCount={totalUsersCount}
        itemsCountOnPage={usersCountOnPage}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />

      {users.map((u) => (
        <User key={u.id} user={u}
          followingProgress={followingProgress}
          unfollow={unfollowUser}
          follow={followUser} />
      ))}
    </div>
  );
};
export default Users;
