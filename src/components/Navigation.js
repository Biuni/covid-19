import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className="AppFilter list-unstyled">
          {this.props.category.map((res, index) => (
            <li key={index}><a href={`#${res.name}`}>{res.category}</a></li>
          ))}
          <li className="AddResource">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScF-NDNNkGUlySFcQQZQk1df_Wu3iOkto4TLJlpkwpdme7wPg/viewform?usp=sf_link">
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
    )
  }
}

export default Navigation;
