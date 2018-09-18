import React from 'react';
import styles from '../styles.css';

var Info = ({ restaurant }) => {
  return (
    <div className={styles.infoDiv}>
      <div className={styles.titleDiv}>
        <span className={styles.title}>{restaurant.name}</span>
      </div>
      <div className={styles.summary}>
        {restaurant.typeOfFood ? restaurant.typeOfFood + ' · ' : null}
        {restaurant.location + ' · '}
        {'$'.repeat(restaurant.expense)}
      </div>
      <div className={styles.ratingGroup}>
        <div className={styles.rating}>
          <img src="https://www.zagat.com/assets/img/z-logo-icon-red.svg" className="zagat-icon" />
          <span className={styles.ratingLabel}>{' ' + restaurant.zagat.info}</span>
          <span className={styles.ratingValue}>{' ' + restaurant.zagat.rating}</span>
        </div>
        <span className={styles.ratingsDivider} />
        <div className={styles.googleRating}>
          <img src="https://www.zagat.com/assets/img/google_icon.svg" className="google-icon" />
          <span>{' ' + restaurant.rating}</span>
          <span className={styles.stars}>{' ' + '★'.repeat(Math.ceil(restaurant.rating))}</span>
        </div>
      </div>
      <div className={styles.description}>{restaurant.description}</div>
    </div>
  );
};

export default Info;
