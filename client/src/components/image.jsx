import React from 'react';
import LeftButton from './buttons/leftButton.jsx';
import RightButton from './buttons/rightButton.jsx';
import styles from '../styles.css';

var Image = ({ restaurant, index, onLeftClick, onRightClick }) => {
  return (
    <div className={styles.imgDiv}>
      <LeftButton restaurant={restaurant} onLeftClick={onLeftClick} />
      <img className={styles.image} src={restaurant.picture[index]} />
      <RightButton restaurant={restaurant} onRightClick={onRightClick} />
    </div>
  );
};

export default Image;
