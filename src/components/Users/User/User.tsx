import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../assets/images/userPhoto.png";
import { UserType } from '../../../types/types'

type PropsType = {
  user: UserType
  followingProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}
const User: React.FC<PropsType> = (props) => {

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
            props.unfollow(props.user.id);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={props.followingProgress.some((id) => id === props.user.id)}
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
