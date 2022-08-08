import React from "react";
import { DialogType, MessageType } from "../../types/types";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import NewMessageForm from "./NewMessageForm.tsx";

type PropsType = {
  sendMessage: (messageText: string) => void
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

const Dialogs: React.FC<PropsType> = (props) => {
  const addNewMessage = (values) => {
    props.sendMessage(values.postText);
  };
  return (
    <div>
      <h2>Диалоги</h2>
      <div className={s.content}>
        <div className={s.dialogs}>
          {props.dialogs.map((d) => (
            <DialogItem name={d.name} id={d.id} key={d.id} />
          ))}
        </div>
        <div className={s.messages}>
          {props.messages.map((m) => (
            <Message message={m.message} key={m.id} />
          ))}
          <NewMessageForm handleSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
