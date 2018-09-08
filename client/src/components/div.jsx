import React from 'react';

var WhatIsThis = ({ restaurant }) => {
  return (
    <div className="container">
      <div className="imgDiv">
        <img className="image" src={restaurant.picture[0]} />
      </div>
      <div className="infoDiv">
        <div>{restaurant.name}</div>
        <div>
          {restaurant.typeOfFood}
          {restaurant.location}
          {restaurant.expense}
        </div>
        <div>
          {restaurant.zagat.info}
          {restaurant.zagat.rating}
        </div>
        <div>{restaurant.description}</div>
      </div>
    </div>
  );
};

export default WhatIsThis;
// let fakeData = [
//   {
//     id: 1,
//     name: 'MOURAD',
//     location: 'SoMa',
//     expense: 4,
//     zagat: {
//       info: 'FOOD',
//       rating: 4.6
//     },
//     typeOfFood: 'Middle Eastern',
//     rating: 4.6,
//     description:
//       'Moroccan fine dining with a California twist & extensive wine options in a swanky, modern setting.',
//     picture: [
//       'https://zagat-photos.imgix.net/ChIJg6QBP32AhYARNh3xlLGG46g/82cf52f25b1e3f6161cb9df76122ddd0.jpg?fit=crop&crop=center&max-w=400&max-h=400&q=75&fm=jpg&auto=format',
//       'https://zagat-photos.imgix.net/ChIJg6QBP32AhYARNh3xlLGG46g/377b5211809835908b95352762ed46dd.jpg?fit=crop&crop=center&max-w=400&max-h=400&q=75&fm=jpg&auto=format'
//     ]
//   },
