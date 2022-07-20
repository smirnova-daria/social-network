const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = { id: 4, message: action.message };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.message;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = (message) => ({
  type: SEND_MESSAGE,
  message,
});
export const updateMessageTextActionCreator = (message) => ({
  type: UPDATE_MESSAGE_TEXT,
  message,
});

export default dialogsReducer;
