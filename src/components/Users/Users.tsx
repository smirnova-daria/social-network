import React from "react";
import Preloader from "../UI/Preloader/Preloader";
import Paginator from "./Paginator/Paginator.tsx";
import User from "./User/User.tsx";
import s from "./Users.module.css";
import { UserType } from '../../types/types'

type PropsType = {
  isFetching: boolean
  totalUsersCount: number
  usersCountOnPage: number
  currentPage: number
  users: Array<UserType>

  onPageChanged: (currentPage: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
};

const Users: React.FC<PropsType> = (props) => {
  return (
    <div>
      {props.isFetching ? <Preloader /> : null}

      <Paginator
        totalItemsCount={props.totalUsersCount}
        itemsCountOnPage={props.usersCountOnPage}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />

      {props.users.map((u) => (
        <User {...props} key={u.id} user={u} />
      ))}
    </div>
  );
};
export default Users;
