import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  
  return (
    <div>
      <h3>Мои посты</h3>
      <form className={s.posts__new}>
        <label>Добавить новый пост</label>
        <textarea name="post-text"></textarea>
        <button type="submit">Опубликовать</button>
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
