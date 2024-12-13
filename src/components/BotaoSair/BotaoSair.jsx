import React from 'react';
import styles from './BotaoSair.module.css'; 
import { Link } from 'react-router-dom';
import {FaSignOutAlt } from 'react-icons/fa'; 

const BotaoSair = ({ aoSair, children }) => {
  return (
    <div>
      <Link to={"/"}>
    <button className={styles.botao} onClick={aoSair}>
    <FaSignOutAlt/>Sair
      {children}
    </button>
      </Link>
    </div>
  );
};

export default BotaoSair