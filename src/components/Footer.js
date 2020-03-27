import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
  render() {
    return (
      <footer>
        Created with <FontAwesomeIcon icon={faHeart} color="#eb5569" /> by <a href="https://biuni.it">Biuni</a><br />
        <small>Virus icon by <a href="https://www.flaticon.com/">Flaticon</a></small>
      </footer>
    )
  }
}

export default Footer;
