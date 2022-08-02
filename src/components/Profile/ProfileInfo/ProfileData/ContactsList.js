import React from "react";
import s from "./ProfileData.module.css";

const ContactsList = ({ contacts }) => {
  return (
    <div>
      <h4>Contacts:</h4>
      <ul className={s.contactsList}>
        {Object.keys(contacts).map((key) => {
          return (
            <li key={key}>
              <a href={contacts[key]}>
                {key}: {contacts[key]}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;
