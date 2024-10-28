import React, { useState } from 'react';
import styles from './Filtro.module.css';
import setaIcon from '../../../img/seta-triangular-apontando-para-baixo.png'; // Ícone da seta padrão
import setaIconAtivo from '../../../img/pra-cima.png'; // Ícone da seta após o clique
import lupa from '../../../img/procurar.png'; // Ícone de lupa

function Filtro({ onFilter, onSort }) {
  const [setaAtiva, setSetaAtiva] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = () => {
    const newOrder = !setaAtiva; // Define a nova ordem
    setSetaAtiva(newOrder);
    onSort(newOrder); // Chama a função de ordenação
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onFilter(term); // Chama a função de filtro
  };

  return (
    <div className={styles.container}>
      <div id="divBusca" className={styles.divBuscas}>
        <input 
          type="text" 
          id="txtBusca" 
          placeholder="Buscar..." 
          className={styles.txtBusca} 
          value={searchTerm}
          onChange={handleSearch} // Atualiza o estado ao digitar
        />
        <button>
          <img src={lupa} alt="pesquisar" />
        </button>
      </div>     
      <div className={styles.buttonContainer}>
        <div className={styles.boxOrdem}>
          <h2 className={styles.h2}>Quantidade</h2>
          <button className={styles.iconButton} onClick={handleClick}>
            <img src={setaAtiva ? setaIconAtivo : setaIcon} alt="Ordem" className={styles.setaIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filtro;
