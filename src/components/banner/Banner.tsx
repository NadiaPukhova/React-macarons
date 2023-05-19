import React from 'react';

import styles from './Banner.module.scss';
import { Link } from 'react-router-dom';

import bannerPng from '../../assets/img/banner.png';
export const Banner: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h2>Макаронс - вкусно, красиво, изыскано</h2>
        <div className={styles.button}>
          <Link to="/sets" className="button button-banner button--outline button--add go-back-btn button--banner">
            <span>Выбрать коробочку</span>
          </Link>
        </div>
      </div>
      <img width="50%" src={bannerPng} alt="Banner" />
    </div>
  );
};
