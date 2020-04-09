import React from 'react';
import FlagIcon from './FlagIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import LikeButton from './LikeButton'

function Card(props) {
  return (
      <div className="card AppCard">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.countryCode === "zz" ? (
              <span role="img" aria-label="World">🌍</span>
            ) : (
              <FlagIcon code={props.countryCode} />
            )}
            &nbsp;{props.country}
          </h6>
          <p className="card-text">{props.description}</p>
          <a href={props.link} target="_blank" rel="noopener noreferrer" className="card-link">
            View <FontAwesomeIcon icon={faAngleDoubleRight} color="#4fc3f7" size="sm" />
          </a>
          <LikeButton like={props.counter} id={props.id} />
        </div>
        <div className="card-footer">
          <small className="text-muted">Added on: <strong>{props.time}</strong></small>
        </div>
      </div>
  );
}

export default Card;
