import React, { Component } from 'react';
import logo from './../virus.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="COVID-19" className="AppLogo" />
        <h1 className="AppTitle">COVID-19 <small>Dashboard and Resources</small></h1>
      </header>
    )
  }
}

export default Header;
