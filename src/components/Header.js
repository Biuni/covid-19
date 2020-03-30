import React from 'react';
import logo from './../virus.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="COVID-19" className="AppLogo" />
      <h1 className="AppTitle">COVID-19 <small>Dashboard and Resources</small></h1>
    </header>
  );
}

export default Header;
