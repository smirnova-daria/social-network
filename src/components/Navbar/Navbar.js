import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <li>
          <NavLink
            to="/profile"
            className={(data) =>
              data.isActive ? s.menu__link_active : s.menu__link
            }
          >
            Моя страница
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dialogs"
            className={(data) =>
              data.isActive ? s.menu__link_active : s.menu__link
            }
          >
            Сообщения
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={(data) =>
              data.isActive ? s.menu__link_active : s.menu__link
            }
          >
            Новости
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/photos"
            className={(data) =>
              data.isActive ? s.menu__link_active : s.menu__link
            }
          >
            Фотографии
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={(data) =>
              data.isActive ? s.menu__link_active : s.menu__link
            }
          >
            Настройки
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
