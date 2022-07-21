import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

export const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hey, how are you?", likesCount: 10 },
        { id: 2, message: "It's my first post", likesCount: 12 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    navbar: {
      friends: [
        { id: 1, name: "Elena" },
        { id: 2, name: "Masha" },
        { id: 3, name: "Maxim" },
      ],
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};
