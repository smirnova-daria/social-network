import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
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
            axios
              .delete(
                `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
                {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "a509dad4-b880-4596-94a6-487c798a5517",
                  },
                }
              )
              .then((res) => {
                if (res.data.resultCode === 0) {
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
            axios
              .post(
                `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
                {},
                {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "a509dad4-b880-4596-94a6-487c798a5517",
                  },
                }
              )
              .then((res) => {
                if (res.data.resultCode === 0) {
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
