import React from 'react';
import Image from './image.jsx';
import Info from './info.jsx';

var Container = ({ restaurant, onLeftClick, onRightClick, index }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <Image
          restaurant={restaurant}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
          index={index}
        />
        <Info restaurant={restaurant} />
      </div>
    </div>
  );
};

export default Container;
