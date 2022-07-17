import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <li className={s.post}>
      <div className={s.post__wrapper}>
        <img
          className={s.avatar}
          src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
        />
        <p className={s.post__message}>{props.message}</p>
      </div>

      <span className={s.likes}>likes: {props.likes}</span>
    </li>
  );
};

export default Post;
