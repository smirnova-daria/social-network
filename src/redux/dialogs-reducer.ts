import { DialogType, MessageType } from "../types/types";
import { InferActionsTypes } from "./store-redux";

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

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "dialogs/SEND_MESSAGE":
      const newMessage = { id: 4, message: action.message };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

//ActionCreators
export const actions = {
  sendMessageActionCreator: (message: string) => ({
    type: "dialogs/SEND_MESSAGE",
    message
  } as const)
}

export default dialogsReducer;

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
