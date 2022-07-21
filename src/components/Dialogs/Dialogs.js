import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const sendMessage = (event) => {
    event.preventDefault();
    const text = props.newMessageText;
    props.sendMessage(text);
  };
  const onMessageTextChange = (event) => {
    const text = event.target.value;
    props.updateMessageText(text);
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
          <form className={s.message__form}>
            <textarea
              value={props.newMessageText}
              onChange={onMessageTextChange}
            ></textarea>
            <button type="submit" onClick={sendMessage}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
