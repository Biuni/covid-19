import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <nav>
        <ul className="AppFilter list-unstyled">
          {this.props.category.map((res, index) => (
            <li key={index}><a href={`#${res.name}`}>{res.category}</a></li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Filter;
