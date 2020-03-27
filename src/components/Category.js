import React, { Component } from 'react';
import Card from './Card';

class Category extends Component {
  render() {

    const printList = this.props.list.map(res => (
      <Card
        title={res.title}
        description={res.description}
        country={res.country}
        countryCode={res.countryCode}
        link={res.link}
        time={res.time} />
    ))

    return (
      <div className="Category">
        <h4 className="CategoryName" id={this.props.link}>{this.props.name}</h4>
        <div className="row">
          {printList}
        </div>
      </div>
    )
  }
}

export default Category;
