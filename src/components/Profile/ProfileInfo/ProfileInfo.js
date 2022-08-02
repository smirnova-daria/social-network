import React, { useState } from "react";
import Preloader from "../../UI/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileData from "./ProfileData/ProfileData";
import EditProfileForm from "./ProfileData/EditProfileForm";
const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

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
      <div className={s.info}>
        <div className={s.avatar}>
          <img src={props.profile.photos.large || userPhoto} alt="avatar" />
          {props.isOwner && (
            <input type={"file"} onChange={onMainPhotoSelected} />
          )}
        </div>
        {editMode ? (
          <EditProfileForm
            profile={props.profile}
            contacts={props.profile.contacts}
            saveProfile={props.saveProfile}
            editModeDisable={()=> setEditMode(false)}
          />
        ) : (
          <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            editMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
