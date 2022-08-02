import { DialogType, MessageType } from "../types/types";

const SEND_MESSAGE = "dialogs/SEND_MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Дарья" },
    { id: 2, name: "Иван" },
    { id: 3, name: "Александр" },
    { id: 4, name: "Елена" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как продвигается обучение?" },
    { id: 3, message: "Yo" },
  ] as Array<MessageType>
};
type InitialStateType = typeof initialState
const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageActionType = {
  type: typeof SEND_MESSAGE,
  message: string
}

export const sendMessageActionCreator = (message: string): SendMessageActionType => ({
  type: SEND_MESSAGE,
  message,
});

export default dialogsReducer;
