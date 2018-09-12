import React from 'react';

var Info = ({ restaurant }) => {
  return (
    <div className="infoDiv">
      <div className="titleDiv">
        <span className="title">{restaurant.name}</span>
      </div>
      <div className="summary">
        {restaurant.typeOfFood ? restaurant.typeOfFood + ' · ' : null}
        {restaurant.location + ' · '}
        {'$'.repeat(restaurant.expense)}
      </div>
      <div className="rating-group">
        <div className="rating">
          <img src="https://www.zagat.com/assets/img/z-logo-icon-red.svg" className="zagat-icon" />
          <span className="rating-label">{' ' + restaurant.zagat.info}</span>
          <span className="rating-value">{' ' + restaurant.zagat.rating}</span>
        </div>
        <span className="ratings-divider" />
        <div className="google-rating">
          <img src="https://www.zagat.com/assets/img/google_icon.svg" className="google-icon" />
          <span>{' ' + restaurant.rating}</span>
          <span className="stars">{' ' + '★'.repeat(Math.ceil(restaurant.rating))}</span>
        </div>
      </div>
      <div className="description">{restaurant.description}</div>
    </div>
  );
};

export default Info;
