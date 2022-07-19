import React from "react";
import s from "./Friends.module.css";

const Friends = (props) => {
  return (
    <div className={s.friends}>
      {props.friends.map((f) => (
        <div className={s.friend}>
          <div className={s.friend__img}></div>
          <span className={s.friend__name}>{f.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Friends;
