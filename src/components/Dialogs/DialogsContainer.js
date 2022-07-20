import React from "react";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const sendMessage = (text) => {
    props.store.dispatch(sendMessageActionCreator(text));
  };
  const onMessageTextChange = (text) => {
    props.store.dispatch(updateMessageTextActionCreator(text));
  };
  return (
    <Dialogs
      updateMessageText={onMessageTextChange}
      sendMessage={sendMessage}
      dialogs={props.store.getState().dialogsPage.dialogs}
      messages={props.store.getState().dialogsPage.messages}
      newMessageText={props.store.getState().dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;