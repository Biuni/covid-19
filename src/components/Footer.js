import React, { Component } from 'react';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
  render() {
    return (
      <footer>
        Created with <FontAwesomeIcon icon={faHeart} color="#eb5569" /> by <a href="https://biuni.it">Biuni</a><br />
        <small>Virus icon by <a href="https://www.flaticon.com/">Flaticon</a></small>
        <div className="text-center mt-2">
          <a href="https://www.buymeacoffee.com/Biuni" target="_blank" rel="noopener noreferrer">
            <img className="AppDonation" src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" />
          </a>
        </div>
        <ScrollUpButton style={{ background: '#ffcdd2', fill: '#eb5569', borderRadius: '5px' }} />
      </footer>
    )
  }
}

export default Footer;
