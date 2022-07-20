import React from "react";
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   const addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   const changePostText = (text) => {
//     props.store.dispatch(updatePostTextActionCreator(text));
//   };
//   return (
//     <MyPosts
//       posts={props.store.getState().profilePage.posts}
//       newPostText={props.store.getState().profilePage.newPostText}
//       addPost={addPost}
//       updatePostText={changePostText}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updatePostText: (text) => {
      dispatch(updatePostTextActionCreator(text));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapStateToDispatch)(MyPosts);

export default MyPostsContainer;
