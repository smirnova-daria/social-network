import React from "react";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <main className={s.main}>
      <header>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg" />
      </header>
      <div>аватар + описание</div>
      <div className={s.posts}>
        <h3>Мои посты</h3>
        <form className={s.posts__new}>
          <label>Добавить новый пост</label>
          <textarea name="post-text"></textarea>
          <button type="submit">Опубликовать</button>
        </form>
        <ul className="posts__list">
          <li className={s.posts__item}>картинка + текст</li>
          <li className={s.posts__item}>картинка + текст</li>
          <li className={s.posts__item}>картинка + текст</li>
        </ul>
      </div>
    </main>
  );
};

export default Profile;
