import React, { Component } from 'react';
import FlagIcon from './FlagIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

class Card extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card AppCard">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted"><FlagIcon code={this.props.countryCode} />  {this.props.country}</h6>
            <p className="card-text">{this.props.description}</p>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="card-link">View <FontAwesomeIcon icon={faExternalLinkAlt} color="#eb5569" size="sm" /></a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Added on: <strong>{this.props.time}</strong></small>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
