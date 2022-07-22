import React from "react";
import Preloader from "../UI/Preloader/Preloader";
import User from "./User/User";
import s from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.usersCountOnPage);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (i === 50) {
      break;
    }
    pages.push(i);
  }

  return (
    <div>
      {props.isFetching ? <Preloader /> : null}
      <div>
        {pages.map((p) => (
          <span
            key={p}
            className={props.currentPage === p ? s.active : ""}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}_
          </span>
        ))}
      </div>

      {props.users.map((u) => (
        <User
          key={u.id}
          user={u}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};
export default Users;
