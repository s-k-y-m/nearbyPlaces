import React from 'react';
import LeftButton from './buttons/leftButton.jsx';
import RightButton from './buttons/rightButton.jsx';

var Image = ({ restaurant, index, onLeftClick, onRightClick }) => {
  return (
    <div className="imgDiv">
      <LeftButton restaurant={restaurant} onLeftClick={onLeftClick} />
      <img className="image" src={restaurant.picture[index]} />
      <RightButton restaurant={restaurant} onRightClick={onRightClick} />
    </div>
  );
};

export default Image;
