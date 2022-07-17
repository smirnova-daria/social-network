import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      <h3>Мои посты</h3>
      <form className={s.posts__new}>
        <label>Добавить новый пост</label>
        <textarea name="post-text"></textarea>
        <button type="submit">Опубликовать</button>
      </form>
      <ul className={s.posts__list}>
        <Post message="Hey, how are you?" likes="10" />
        <Post message="It's my first post" likes="20" />
      </ul>
    </div>
  );
};

export default MyPosts;
