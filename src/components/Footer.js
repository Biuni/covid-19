import React from 'react';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer>
      Created with <FontAwesomeIcon icon={faHeart} color="#eb5569" /> by <a href="https://biuni.it">Biuni</a><br />
      <small>Virus icon by <a href="https://www.flaticon.com/">Flaticon</a></small>
      <div className="text-center mt-2">
        <a href="https://www.buymeacoffee.com/Biuni" target="_blank" rel="noopener noreferrer">
          <img className="AppDonation" src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" />
        </a>
      </div>
      <ScrollUpButton style={{ background: '#e0f2f1', fill: '#00796b', borderRadius: '5px' }} />
    </footer>
  );
}

export default Footer;
