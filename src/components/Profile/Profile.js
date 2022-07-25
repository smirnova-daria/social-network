import React from "react";
import { Navigate } from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  if (!props.isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
