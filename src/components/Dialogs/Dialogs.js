import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const newMessageTextaera = React.createRef();

  const addMessage = (event) => {
    event.preventDefault();
    const text = newMessageTextaera.current.value;
    alert(text);
    newMessageTextaera.current.value = "";
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
            <textarea ref={newMessageTextaera}></textarea>
            <button type="submit" onClick={addMessage}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
