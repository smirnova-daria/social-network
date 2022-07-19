import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  return (
    <div>
      <h2>Диалоги</h2>
      <div className={s.content}>
        <div className={s.dialogs}>
          {props.dialogs.map((d) => (
            <DialogItem name={d.name} id={d.id} />
          ))}
        </div>
        <div className={s.messages}>
          {props.messages.map((m) => (
            <Message message={m.message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
