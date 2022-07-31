import React from "react";
import Preloader from "../UI/Preloader/Preloader";
import Paginator from "./Paginator/Paginator";
import User from "./User/User";
import s from "./Users.module.css";

const Users = (props) => {
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
