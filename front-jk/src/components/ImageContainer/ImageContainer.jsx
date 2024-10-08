import React from 'react';
import styles from './ImageContainer.module.css';

const ImageContainer = ({ image, children }) => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${image})` }}  >
      {children} 
    </div>
  );
};

export default ImageContainer;
