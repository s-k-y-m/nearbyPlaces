import React from 'react';
import styles from '../../nearby.css';

var LeftButton = ({ onLeftClick, restaurant }) => {
  return (
    <svg
      fill="#000000"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.leftButton}
      onClick={() => {
        onLeftClick(restaurant);
      }}
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export default LeftButton;
