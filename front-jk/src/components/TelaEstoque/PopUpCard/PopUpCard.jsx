import React, { useState, useRef, useEffect } from 'react';
import styles from './PopUpCard.module.css';

function PopUpCard({ closePopUpCard, cardInfo }) {
  const { nome = 'Item', tipos = [] } = cardInfo || {};
  const [filtro, setFiltro] = useState("");
  const containerRef = useRef(null); // Referência para o contêiner do modal

  // Obter uma lista única de tipos para o filtro
  const tiposUnicos = [...new Set(tipos.map(tipo => tipo.nome))];

  // Filtrar os itens de acordo com a seleção do filtro
  const tiposFiltrados = filtro ? tipos.filter(tipo => tipo.nome === filtro) : tipos;

  // Log para depuração
  console.log("Card Info:", cardInfo);
  console.log("Tipos:", tipos);
  console.log("Tipos Únicos:", tiposUnicos);
  console.log("Filtro:", filtro);
  console.log("Tipos Filtrados:", tiposFiltrados);

  // Efeito para fechar o modal ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closePopUpCard();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    // Limpar o evento ao desmontar
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closePopUpCard]);

  return (
    <div className={styles.overlay}>
      <div className={styles.container} ref={containerRef}>
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
    </div>
  );
}

export default PopUpCard;
