import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPostForm from "./NewPostForm";
const MyPosts = (props) => {
  const addPost = (values) => {
    props.addPost(values.postText);
  };

  return (
    <div>
      <h3>Мои посты</h3>
      <NewPostForm handleSubmit={addPost} />
      <ul className={s.posts__list}>
        {props.posts.map((p) => (
          <Post message={p.message} likes={p.likesCount} key={p.id} />
        ))}
      </ul>
    </div>
  );
};

export default MyPosts;
