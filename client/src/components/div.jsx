import React from 'react';

var WhatIsThis = ({ restaurant, onLeftClick, onRightClick, index }) => {
  return (
    <div className="container">
      <div className="testing">
        <div className="imgDiv">
          <svg
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="left-button"
            onClick={() => {
              onLeftClick(restaurant);
            }}
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <img className="image" src={restaurant.picture[index]} />
          <svg
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="right-button"
            onClick={() => {
              onRightClick(restaurant);
            }}
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div className="infoDiv">
          <div>
            <span className="title">{restaurant.name}</span>
          </div>
          <div className="summary">
            {restaurant.typeOfFood ? restaurant.typeOfFood + ' · ' : null}
            {restaurant.location + ' · '}
            {'$'.repeat(restaurant.expense)}
          </div>
          <div className="rating-group">
            <div className="rating">
              <img
                src="https://www.zagat.com/assets/img/z-logo-icon-red.svg"
                className="zagat-icon"
              />
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
      </div>
    </div>
  );
};

export default WhatIsThis;
