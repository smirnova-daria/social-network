import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  const newPostTextarea = React.createRef();
  const addPost = (event) => {
    event.preventDefault();
    const text = newPostTextarea.current.value;
    props.addPost(text);
    newPostTextarea.current.value = "";
  };
  return (
    <div>
      <h3>Мои посты</h3>
      <form className={s.posts__new}>
        <label>Добавить новый пост</label>
        <textarea name="post-text" ref={newPostTextarea}></textarea>
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
