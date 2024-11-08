import React from 'react';
import styles from './Step.module.css'; // Importando os estilos do CSS Module

const Step = ({ active }) => {
  return (
      <>
      <div className={`${styles.step} ${active ? styles.active : ''}`}></div>
      </>
  );
};

export default Step;
