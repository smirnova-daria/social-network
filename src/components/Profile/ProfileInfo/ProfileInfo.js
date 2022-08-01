import React from "react";
import Preloader from "../../UI/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userPhoto.png";
const ProfileInfo = (props) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg"
        className={s.profile_img}
      />

      <div className={s.info}>
        <img src={props.profile.photos.large || userPhoto} />
        {props.isOwner && (
          <input type={"file"} onChange={onMainPhotoSelected} />
        )}
        <div>
          <p className={s.name}>{props.profile.fullName}</p>
          <p className={s.about}>{props.profile.aboutMe}</p>
          <h4>Contacts:</h4>
          <ul>
            <li>
              <a href={props.profile.contacts.vk}>VK</a>
            </li>
            <li>
              <a href={props.profile.contacts.twitter}>Twitter</a>
            </li>
            <li>
              <a href={props.profile.contacts.instagram}>Insta</a>
            </li>
          </ul>
        </div>
      </div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
