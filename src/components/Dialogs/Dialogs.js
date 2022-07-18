import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};
const Dialogs = () => {
  const dialogsData = [
    { id: 1, name: "Дарья" },
    { id: 2, name: "Иван" },
    { id: 3, name: "Александр" },
    { id: 4, name: "Елена" },
  ];
  const messagesData = [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как продвигается обучение?" },
    { id: 3, message: "Yo" },
  ];
  return (
    <div>
      <h2>Диалоги</h2>
      <div className={s.content}>
        <div className={s.dialogs}>
          {dialogsData.map((d) => (
            <DialogItem name={d.name} id={d.id} />
          ))}
        </div>
        <div className={s.messages}>
          {messagesData.map((m) => (
            <Message message={m.message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
