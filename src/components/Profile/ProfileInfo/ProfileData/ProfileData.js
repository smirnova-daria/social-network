import React, { useState } from "react";
import ContactsList from "./ContactsList";
import EditProfileForm from "./EditProfileForm";
import s from "./ProfileData.module.css";

const ProfileData = ({ profile, isOwner, editMode }) => {
  return (
    <div>
      {isOwner && <button onClick={editMode}>Edit</button>}
      <div>
        <p className={s.name}>
          <b>Имя: </b>
          {profile.fullName}
        </p>
        <p className={s.about}>
          <b>Обо мне: </b>
          {profile.aboutMe}
        </p>
        <p>
          <b>Ищу работу:</b> {profile.lookingForAJob ? "ДА" : "НЕТ"}
        </p>
        {profile.lookingForAJob && (
          <p>
            <b>Мои навыки: </b>
            {profile.lookingForAJobDescription}
          </p>
        )}
        <ContactsList contacts={profile.contacts} />
      </div>
    </div>
  );
};

export default ProfileData;
