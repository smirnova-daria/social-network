const SEND_MESSAGE = "dialogs/SEND_MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = { id: 4, message: action.message };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export default dialogsReducer;
