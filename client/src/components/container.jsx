import React from 'react';
import Image from './image.jsx';
import Info from './info.jsx';
import styles from '../styles.css';

var Container = ({ restaurant, onLeftClick, onRightClick, index }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
