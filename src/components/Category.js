import React, { Component } from 'react';
import Card from './Card';
import FilterCountry from './FilterCountry';

class Category extends Component {
  render() {
    return (
      <div className="Category">
        <h4 className="CategoryName" id={this.props.link}>{this.props.name}</h4>
        {/*<FilterCountry />*/}
        <div style={{clear: 'both'}}></div>
        <div className="row">
          {this.props.list.map((res, index) => (
            <Card
              title={res.title}
              description={res.description}
              country={res.country}
              countryCode={res.countryCode}
              link={res.link}
              time={res.time}
              key={index} />
          ))}
        </div>
      </div>
    )
  }
}

export default Category;
