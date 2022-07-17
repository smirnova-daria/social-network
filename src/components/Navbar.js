import React from "react";
import s from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <li>
          <a href="/" className={s.menu__link}>
            Моя страница
          </a>
        </li>
        <li>
          <a href="/" className={s.menu__link}>
            Сообщения
          </a>
        </li>
        <li>
          <a href="/" className={s.menu__link}>
            Новости
          </a>
        </li>
        <li>
          <a href="/" className={s.menu__link}>
            Фотографии
          </a>
        </li>
        <li>
          <a href="/" className={s.menu__link}>
            Настройки
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
