import React from "react";
import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (text) => {
      dispatch(updateMessageTextActionCreator(text));
    },
    sendMessage: (text) => {
      dispatch(sendMessageActionCreator(text));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
