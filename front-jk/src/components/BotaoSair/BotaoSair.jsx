import React from 'react';
import styles from './BotaoSair.module.css'; 
import { Link } from 'react-router-dom';

const BotaoSair = ({ aoSair, children, to }) => {
  return (
    <div>
      <Link to={to}>
    <button className={styles.botao} onClick={aoSair}>
      Sair
      {children}
    </button>
      </Link>
    </div>
  );
};

export default BotaoSair