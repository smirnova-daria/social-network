import React from "react";
import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   const sendMessage = (text) => {
//     props.store.dispatch(sendMessageActionCreator(text));
//   };
//   const onMessageTextChange = (text) => {
//     props.store.dispatch(updateMessageTextActionCreator(text));
//   };
//   return (
//     <Dialogs
//       updateMessageText={onMessageTextChange}
//       sendMessage={sendMessage}
//       dialogs={props.store.getState().dialogsPage.dialogs}
//       messages={props.store.getState().dialogsPage.messages}
//       newMessageText={props.store.getState().dialogsPage.newMessageText}
//     />
//   );
// };
const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    updateMessageText: (text) => {
      dispatch(updateMessageTextActionCreator(text));
    },
    sendMessage: (text) => {
      dispatch(sendMessageActionCreator(text));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapStateToDispatch)(Dialogs);
export default DialogsContainer;
