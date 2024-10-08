import React from 'react';
import styles from './Botao.module.css'; 

const Botao = ({ children,funcao }) => {
  return (
    <button className={styles.button} onClick={funcao}>
      {children}
    </button>
  );
};


export default Botao;
