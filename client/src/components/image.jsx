import React from 'react';

var Image = ({ restaurant, index, onLeftClick, onRightClick }) => {
  return (
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
  );
};

export default Image;
