import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <main className={s.main}>
      <header>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg" />
      </header>
      <div>аватар + описание</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
