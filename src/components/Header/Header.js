import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png"
          alt="logo"
        />
      </div>
      {props.isAuth ? (
        <div>{props.login}</div>
      ) : (
        <NavLink to={"login"}>Login</NavLink>
      )}
    </header>
  );
};

export default Header;
