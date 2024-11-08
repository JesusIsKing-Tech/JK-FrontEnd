import React from 'react';
import styles from './Titulo.module.css'; 

const Titulo = ({children}) => {
  return (
    <h2 className={styles.title}>
          {children}
    </h2>
  );
};

export default Titulo