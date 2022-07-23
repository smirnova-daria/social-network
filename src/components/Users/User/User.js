import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";
import userPhoto from "../../../assets/images/userPhoto.png";
const User = (props) => {
  return (
    <div>
      <NavLink to={`/profile/${props.user.id}`}>
        <img
          src={props.user.photos.small || userPhoto}
          width="50px"
          alt="user"
        />
      </NavLink>

      {props.user.followed ? (
        <button
          onClick={() => {
            usersAPI.unfollowUser(props.user.id).then((data) => {
              if (data.resultCode === 0) {
                props.unfollow(props.user.id);
              }
            });
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            usersAPI.followUser(props.user.id).then((data) => {
              if (data.resultCode === 0) {
                props.follow(props.user.id);
              }
            });
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
