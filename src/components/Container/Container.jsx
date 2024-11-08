import React from 'react';
import styles from './Container.module.css'; // Importando os estilos

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Container;