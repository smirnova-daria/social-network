import React from "react";
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const changePostText = (text) => {
    props.store.dispatch(updatePostTextActionCreator(text));
  };
  return (
    <MyPosts
      posts={props.store.getState().profilePage.posts}
      newPostText={props.store.getState().profilePage.newPostText}
      addPost={addPost}
      updatePostText={changePostText}
    />
  );
};

export default MyPostsContainer;
