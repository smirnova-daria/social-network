import React from "react";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const sendMessage = (event) => {
    event.preventDefault();
    const text = props.state.newMessageText;
    props.dispatch(sendMessageActionCreator(text));
  };
  const onMessageTextChange = (event) => {
    const text = event.target.value;
    props.dispatch(updateMessageTextActionCreator(text));
  };
  return (
    <div>
      <h2>Диалоги</h2>
      <div className={s.content}>
        <div className={s.dialogs}>
          {props.state.dialogs.map((d) => (
            <DialogItem name={d.name} id={d.id} />
          ))}
        </div>
        <div className={s.messages}>
          {props.state.messages.map((m) => (
            <Message message={m.message} />
          ))}
          <form className={s.message__form}>
            <textarea
              value={props.state.newMessageText}
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
