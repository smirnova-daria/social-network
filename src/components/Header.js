import React from "react";
import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png" />
      </div>
    </header>
  );
};

export default Header;
