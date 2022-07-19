import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const dialogsData = [
  { id: 1, name: "Дарья" },
  { id: 2, name: "Иван" },
  { id: 3, name: "Александр" },
  { id: 4, name: "Елена" },
];
const messagesData = [
  { id: 1, message: "Привет" },
  { id: 2, message: "Как продвигается обучение?" },
  { id: 3, message: "Yo" },
];
const postsData = [
  { id: 1, message: "Hey, how are you?", likesCount: 10 },
  { id: 2, message: "It's my first post", likesCount: 12 },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messagesData} posts={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
