import React from 'react';
import { useLocation } from 'react-router-dom'; // Supondo que você está usando React Router
import styles from './HeaderLogado.module.css';
import logo from '../../img/logo2.png';
import fotoPerfil from '../../img/perfil.jpg';
import iEstoque from '../../img/estoque-pronto.png'
import iNoticia from '../../img/noticias.png'
import iDoe from '../../img/doacao-de-alimentos.png'

const HeaderLogado = () => {
  const location = useLocation(); // Obtém a rota atual

  return (
    <header className={styles.header}>
      <img alt="Logo" className={styles.logo} src={logo} />
      <nav className={styles.nav}>
      <img alt='estoque' src={iEstoque} className={styles.img}></img>
        <a href="/estoque"className={location.pathname === '/estoque' ? styles.active : ''}>Estoque</a>

        <img alt='noticias' src={iNoticia} className={styles.img}></img>
        <a href="/noticias" className={location.pathname === '/noticias' ? styles.active : ''}>Notícias</a>

        <img alt='doe' src={iDoe} className={styles.img}></img>
        <a href="/doe" className={location.pathname === '/doe' ? styles.active : ''}> Doe</a>
      </nav>
      <div className={styles.profile}>
       <a href="/perfil">
        <img title="Meu perfil" src={fotoPerfil} alt="Profile"/>
        </a> 
      </div>
    </header>
  );
};

export default HeaderLogado;
