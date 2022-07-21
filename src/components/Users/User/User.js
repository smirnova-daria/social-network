import React from "react";

const User = (props) => {
  return (
    <div>
      <img src={props.user.photo} width="50px" />
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
      <span>{props.user.fullName} </span>
      <span>{props.user.status} </span>
      <span>{props.user.location.country} </span>
      <span>{props.user.location.city} </span>
    </div>
  );
};

export default User;
