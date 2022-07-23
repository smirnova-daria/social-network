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
          disabled={props.followingProgress.some((id) => id === props.user.id)}
          onClick={() => {
            props.toggleFollowingProgress(true, props.user.id);
            usersAPI.unfollowUser(props.user.id).then((data) => {
              if (data.resultCode === 0) {
                props.unfollow(props.user.id);
              }
              props.toggleFollowingProgress(false, props.user.id);
            });
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={props.followingProgress.some((id) => id === props.user.id)}
          onClick={() => {
            props.toggleFollowingProgress(true, props.user.id);

            usersAPI.followUser(props.user.id).then((data) => {
              if (data.resultCode === 0) {
                props.follow(props.user.id);
              }
              props.toggleFollowingProgress(false, props.user.id);
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
