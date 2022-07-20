const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
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
    if (action.type === ADD_POST) {
      const newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      const newMessage = { id: 4, message: action.message };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.message;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text,
});
export const sendMessageActionCreator = (message) => ({
  type: SEND_MESSAGE,
  message,
});
export const updateMessageTextActionCreator = (message) => ({
  type: UPDATE_MESSAGE_TEXT,
  message,
});

window.store = store;
