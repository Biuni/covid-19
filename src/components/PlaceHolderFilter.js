import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

function PlaceHolderFilter(props) {
  return (
    <div className="d-block text-center my-5 pt-5">
      No resources for this country!
      <button className="AppRemoveFilter" onClick={() => props.clear()}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} color="#00796b" />&nbsp;&nbsp;Remove filter
      </button>
    </div>
  );
}

export default PlaceHolderFilter;
