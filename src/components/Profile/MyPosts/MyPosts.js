import React from "react";
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  const newPostTextarea = React.createRef();

  const addPost = (event) => {
    event.preventDefault();
    props.dispatch(addPostActionCreator());
  };

  const changePostText = () => {
    const text = newPostTextarea.current.value;
    props.dispatch(updatePostTextActionCreator(text));
  };
  return (
    <div>
      <h3>Мои посты</h3>
      <form className={s.posts__new}>
        <label>Добавить новый пост</label>
        <textarea
          name="post-text"
          ref={newPostTextarea}
          onChange={changePostText}
          value={props.newPostText}
        ></textarea>
        <button type="submit" onClick={addPost}>
          Опубликовать
        </button>
      </form>
      <ul className={s.posts__list}>
        {props.posts.map((p) => (
          <Post message={p.message} likes={p.likesCount} />
        ))}
      </ul>
    </div>
  );
};

export default MyPosts;
