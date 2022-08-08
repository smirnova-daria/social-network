import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { actions } from "../../redux/dialogs-reducer.ts";
import Dialogs from "./Dialogs.tsx";
import { AppStateType } from '../../redux/store-redux'

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    // newMessageText: state.dialogsPage.newMessageText,
  };
};

export default compose(
  connect(mapStateToProps, { ...actions }),
  withAuthRedirect
)(Dialogs);
