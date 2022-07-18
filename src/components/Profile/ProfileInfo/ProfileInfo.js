import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg"
        className={s.profile_img}
      />

      <div>аватар + описание</div>
    </div>
  );
};

export default ProfileInfo;
