const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Дарья" },
    { id: 2, name: "Иван" },
    { id: 3, name: "Александр" },
    { id: 4, name: "Елена" },
  ],
  messages: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как продвигается обучение?" },
    { id: 3, message: "Yo" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const newState = { ...state };
      const newMessage = { id: 4, message: action.message };
      newState.messages = [...state.messages];
      newState.messages.push(newMessage);
      newState.newMessageText = "";
      return newState;
    }
    case UPDATE_MESSAGE_TEXT: {
      const newState = { ...state };
      newState.newMessageText = action.message;
      return newState;
    }
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
