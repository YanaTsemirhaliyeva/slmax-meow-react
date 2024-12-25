'use client';
import { useEffect } from 'react';
import styles from './Snowfall.module.scss';

export const Snowfall = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add(styles.snowflake);

      const size = Math.random() * 8 + 5 + 'px';
      snowflake.style.width = size;
      snowflake.style.height = size;
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 8 + 5 + 's';
      snowflake.style.opacity = (Math.random() * 0.5 + 0.5).toString();

      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, parseFloat(snowflake.style.animationDuration) * 3000);
    };

    const interval = setInterval(createSnowflake, 500);
    return () => clearInterval(interval);
  }, []);

  return null;
};
