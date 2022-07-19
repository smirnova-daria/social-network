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
    },
    navbar: {
      friends: [
        { id: 1, name: "Elena" },
        { id: 2, name: "Masha" },
        { id: 3, name: "Maxim" },
      ],
    },
  },

  getState() {
    return this._state;
  },

  addPost() {
    const newPost = {
      id: 6,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updatePostText(text) {
    this._state.profilePage.newPostText = text;

    this._callSubscriber(this._state);
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};
