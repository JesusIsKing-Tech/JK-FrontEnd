import React, { useState, useRef, useEffect } from 'react';
import styles from './PopUpCard.module.css';
import PopUp from '../../PopUp/PopUp.jsx';

function PopUpCard({ closePopUpCard, cardInfo }) {
  const { nome = 'Item', tipos = [] } = cardInfo || {};
  const [filtro, setFiltro] = useState("");
  const [isAddFoodModalVisible, setIsAddFoodModalVisible] = useState(false);
  const containerRef = useRef(null);

  const tiposUnicos = [...new Set(tipos.map(tipo => tipo.nome))];
  const tiposFiltrados = filtro ? tipos.filter(tipo => tipo.nome === filtro) : tipos;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closePopUpCard();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closePopUpCard]);

  const openAddFoodModal = () => {
    setIsAddFoodModalVisible(true);
  };

  const closeAddFoodModal = () => {
    setIsAddFoodModalVisible(false);
  };

  return (
    <div className={styles.overlay}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Lista de {nome.toLowerCase()}</h2>
        <button className={styles.closeButton} onClick={closePopUpCard}>x</button>
      </div>
  
      <div className={styles.filterContainer}>
        <label htmlFor="tipoFiltro">Tipo: </label>
        <select
          id="tipoFiltro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className={styles.select}
        >
          <option value="">Todos</option>
          {tiposUnicos.map((tipoNome, index) => (
            <option key={index} value={tipoNome}>{tipoNome}</option>
          ))}
        </select>
      </div>
  
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>N°</th>
              <th>Tipo</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
            {tiposFiltrados.length > 0 ? (
              tiposFiltrados.map((tipo, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{tipo.nome}</td>
                  <td>{tipo.peso}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Nenhum item encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  
      <div className={styles.boxBotao}>
        <button className={styles.submitButton} onClick={openAddFoodModal}>
          Adicionar Alimento
        </button>
      </div>
    </div>

    {isAddFoodModalVisible && (
        // <div className={styles.overlay}>
        //   <div className={styles.container}>
        //     <div className={styles.header}>
        //       <h2>Cadastrar Alimento</h2>
        //       <button className={styles.closeButton} onClick={closeAddFoodModal}>x</button>
        //     </div>
        //     <form className={styles.form}>
        //       <label>
        //         Nome do Alimento:
        //         <input type="text" className={styles.input} />
        //       </label>
        //       <label>
        //         Peso:
        //         <input type="text" className={styles.input} />
        //       </label>
        //       <button type="submit" className={styles.submitButton}>
        //         Salvar
        //       </button>
        //     </form>
        //   </div>
        // </div>
        <PopUp closePopUp={closeAddFoodModal}></PopUp>
      )}
    </div>  
  );
}

export default PopUpCard;
