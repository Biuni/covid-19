import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {
  FacebookShareButton, FacebookIcon,
  TelegramShareButton, TelegramIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon
} from 'react-share';

function Navigation(props) {
  return (
    <nav>
      <ul className="AppFilter list-unstyled">
        {props.category.map((res, index) => (
          <li key={index}>
            <Link to={res.name} spy={true} smooth={true} duration={500}>{res.category}</Link>
          </li>
        ))}
        <li className="AddResource">
          <a href="http://api.covid-19-coronavirus.tools/">
            <FontAwesomeIcon icon={faPlusCircle} color="#eb5569" />&nbsp;Add resource
          </a>
        </li>
      </ul>
      <ul className="AppShare list-unstyled">
        <li>
          <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={25} round={true} />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={25} round={true} />
          </TwitterShareButton>
        </li>
        <li>
          <WhatsappShareButton url={window.location.href}>
            <WhatsappIcon size={25} round={true} />
          </WhatsappShareButton>
        </li>
        <li>
          <TelegramShareButton url={window.location.href}>
            <TelegramIcon size={25} round={true} />
          </TelegramShareButton>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
