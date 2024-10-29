import React, { useState } from 'react';
import styles from './Filtro.module.css';
import barraIcon from '../../../img/menos-linha-reta-horizontal.png';
import setaIconBaixo from '../../../img/seta-triangular-apontando-para-baixo.png';
import setaIconCima from '../../../img/pra-cima.png';
import lupa from '../../../img/procurar.png';

function Filtro({ onFilter, onSort }) {
  const [sortOrder, setSortOrder] = useState(0); // 0 - Alfabética, 1 - Crescente, 2 - Decrescente
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = () => {
    const newSortOrder = (sortOrder + 1) % 3;
    setSortOrder(newSortOrder);
    onSort(newSortOrder); // Atualiza a ordenação com o novo estado
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term === '') {
      onFilter(''); // Atualiza automaticamente para exibir todos os cards
    }
  };

  const handleButtonSearch = () => {
    onFilter(searchTerm); // Executa o filtro com o termo atual
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleButtonSearch(); // Chama a pesquisa ao pressionar Enter
    }
  };

  const getSortIcon = () => {
    if (sortOrder === 0) return barraIcon;
    return sortOrder === 1 ? setaIconBaixo : setaIconCima;
  };

  return (
    <div className={styles.container}>
      <div id="divBusca" className={styles.divBuscas}>
        <button onClick={handleButtonSearch}>
          <img src={lupa} alt="pesquisar" />
        </button>
        <input
          type="text"
          id="txtBusca"
          placeholder="Buscar..."
          className={styles.txtBusca}
          value={searchTerm}
          onChange={handleInputChange} // Atualiza o termo e exibe todos os cards se vazio
          onKeyDown={handleKeyDown} // Ativa a busca ao pressionar Enter
        />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.boxOrdem}>
          <h2 className={styles.h2}>Quantidade</h2>
          <button className={styles.iconButton} onClick={handleClick}>
            <img src={getSortIcon()} alt="Ordem" className={styles.setaIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filtro;
