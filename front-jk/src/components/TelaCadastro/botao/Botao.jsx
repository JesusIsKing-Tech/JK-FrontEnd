import React from 'react';
import styles from './Botao.module.css'; 
import { Link } from 'react-router-dom';

const Botao = ({ children,funcao,to }) => {

  return (
    <Link className={styles.Link} to={to}>
    <button className={styles.button} onClick={funcao}>
      {children}
    </button>
    </Link>
  );
};


export default Botao;
