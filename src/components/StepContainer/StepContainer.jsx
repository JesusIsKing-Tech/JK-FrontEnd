import React from 'react';
import styles from './StepContainer.module.css'; // Importando os estilos do CSS Module

const StepContainer = ({ children }) => {
  return (
      <div className={styles.container}>{children}</div>
  );
};

export default StepContainer;
