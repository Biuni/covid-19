import React, { Component } from 'react';
import FlagIcon from './FlagIcon';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted"><FlagIcon code={this.props.countryCode} />  {this.props.country}</h6>
          <p className="card-text">{this.props.description}</p>
          <a href={this.props.link} target="_blank" className="card-link">View</a>
        </div>
        <div className="card-footer">
          <small className="text-muted">Added on: <strong>{this.props.time}</strong></small>
        </div>
      </div>
    )
  }
}

export default Card;
