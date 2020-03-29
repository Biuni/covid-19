import React, { Component } from 'react';
import FlagIcon from './FlagIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import LikeButton from './LikeButton'

class Card extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card AppCard">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.countryCode === "zz" ? (
                <span role="img" aria-label="World">🌍</span>
              ) : (
                <FlagIcon code={this.props.countryCode} />
              )}
              &nbsp;{this.props.country}
            </h6>
            <p className="card-text">{this.props.description}</p>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="card-link">
              View <FontAwesomeIcon icon={faAngleDoubleRight} color="#4fc3f7" size="sm" />
            </a>
            <LikeButton like={this.props.counter} id={this.props.id} />
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
