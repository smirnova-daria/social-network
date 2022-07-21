import React from "react";
import userPhoto from "../../../assets/images/userPhoto.png";
const User = (props) => {
  return (
    <div>
      <img src={props.user.photos.small || userPhoto} width="50px" alt="user" />
      {props.user.follow ? (
        <button
          onClick={() => {
            props.unfollow(props.user.id);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            props.follow(props.user.id);
          }}
        >
          Follow
        </button>
      )}
      <span>{props.user.name} </span>
      <span>{props.user.status} </span>
      <span>{"country"} </span>
      <span>{"city"} </span>
    </div>
  );
};

export default User;
