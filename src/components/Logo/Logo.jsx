import React from 'react';
import styles from './Logo.module.css'; 

const Logo = ({ src, alt, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={styles.logo}
      onClick={onClick}
    />
  );
};

export default Logo;