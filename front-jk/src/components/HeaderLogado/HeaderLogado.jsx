import React from 'react';
import { useLocation } from 'react-router-dom'; // Supondo que você está usando React Router
import styles from './HeaderLogado.module.css';
import logo from '../../img/logo2.png';
import fotoPerfil from '../../img/perfil.jpg';
import { BiBox } from 'react-icons/bi';
import { MdNewspaper } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
const HeaderLogado = () => {
  const location = useLocation(); // Obtém a rota atual

  return (
    <header className={styles.header}>
      <img alt="Logo" className={styles.logo} src={logo} />
      <nav className={styles.nav}>
      
        <a href="/estoque"className={location.pathname === '/estoque' ? styles.active : '' } style={{display: 'flex', alignItems: 'center', gap: '5px'}}><BiBox size={30}/> Estoque</a>

        
        <a href="/noticias" className={location.pathname === '/noticias' ? styles.active : ''}  style={{display: 'flex', alignItems: 'center', gap: '5px'}}><MdNewspaper size={30}/>Notícias</a>

        
        <a href="/doe" className={location.pathname === '/doe' ? styles.active : ''} style={{display: 'flex', alignItems: 'center', gap: '5px'}}><FaHandHoldingHeart size={30}/>Doe</a>
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
