import React from 'react';
import styles from './Botao.module.css'; 

const Botao = ({ children }) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
};


export default Botao;
