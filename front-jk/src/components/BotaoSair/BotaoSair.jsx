import React from 'react';
import styles from './BotaoSair.module.css'; 

const BotaoSair = ({ aoSair }) => {
  return (
    <button className={styles.botao} onClick={aoSair}>
      Sair
    </button>
  );
};

export default BotaoSair