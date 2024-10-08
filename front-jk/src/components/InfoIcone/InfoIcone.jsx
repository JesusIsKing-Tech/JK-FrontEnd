import React from 'react';
import styles from './InfoIcone.module.css';

const InfoIcone = ({ texto }) => {
  return (
    <span className={styles.infoIcon}>
      i
      <div className={styles.tooltipText}>
        {texto}
      </div>
    </span>
  );
};

export default InfoIcone;
