import { renderAllTree } from "../render";

const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hey, how are you?", likesCount: 10 },
      { id: 2, message: "It's my first post", likesCount: 12 },
    ],
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
};
export const addPost = (postMessage) => {
  const newPost = {
    id: 6,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  renderAllTree(state);
};
export default state;
