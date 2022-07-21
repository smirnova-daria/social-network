import React from "react";
import User from "./User/User";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: "Dasha S",
        status: "I like crosscountry ski",
        location: { city: "V Luki", country: "Russia" },
        follow: true,
        photo: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
      },
      {
        id: 2,
        fullName: "Masha C",
        status: "I like yoga",
        location: { city: "Saint P", country: "Russia" },
        follow: false,
        photo: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
      },
      {
        id: 3,
        fullName: "Liza M",
        status: "I like Fed",
        location: { city: "V Luki", country: "Russia" },
        follow: true,
        photo: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
      },
    ]);
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
