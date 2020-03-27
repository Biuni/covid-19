import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

class Loader extends Component {
  render() {
    return (
      <div className="AppLoader">
        <FontAwesomeIcon icon={faCircleNotch} size="3x" spin /><br />Fetching data...
      </div>
    )
  }
}

export default Loader;
