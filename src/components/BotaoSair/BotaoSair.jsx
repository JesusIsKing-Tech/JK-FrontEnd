import React from 'react';
import styles from './BotaoSair.module.css'; 
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BotaoSair = ({ aoSair, children }) => {
  return (
    <div>
      <Link to={"/"}>
    <button className={styles.botao} onClick={aoSair}>
    <FaArrowLeft/> Voltar para a página de início
      {children}
    </button>
      </Link>
    </div>
  );
};

export default BotaoSair