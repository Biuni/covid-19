import React from 'react';
import Card from './Card';

function Category(props) {
  return (
    <div className="Category">
      <h4 className="CategoryName" id={props.link}>{props.name}</h4>
      <div className="row">
        {props.list.map((res, index) => (
          <Card
            id={res.id}
            title={res.title}
            description={res.description}
            country={res.country}
            countryCode={res.countryCode}
            link={res.link}
            time={res.time}
            counter={res.counter}
            key={index} />
        ))}
      </div>
    </div>
  );
}

export default Category;
