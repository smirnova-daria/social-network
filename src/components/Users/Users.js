import React from "react";
import User from "./User/User";
import * as axios from "axios";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => props.setUsers(res.data.items));
  }

  return (
    <div>
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
