// src/components/Filtro.jsx

import React, { useState, useRef, useEffect } from 'react';
import styles from './Filtro.module.css'; // Crie um arquivo CSS para estilização

const Filtro = ({ categorias, tipos, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tipo, setTipo] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredCategories = categorias.filter(cat => 
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setIsDropdownOpen(true);
    onFilterChange({
      searchTerm: value,
      tipo
    });
  };

  const handleTipoChange = (event) => {
    const value = event.target.value;
    setTipo(value);
    onFilterChange({
      searchTerm,
      tipo: value
    });
  };

  const handleCategoriaChange = (cat) => {
    setSearchTerm(cat);
    setIsDropdownOpen(false);
    onFilterChange({
      searchTerm: cat,
      tipo
    });
  };

  // Hook para lidar com cliques fora do dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.filtroContainer}>
      <div className={styles.dropdown} ref={dropdownRef}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Pesquisar categoria..."
          onClick={() => setIsDropdownOpen(true)}
        />
        {isDropdownOpen && (
          <ul className={styles.dropdownList}>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat, index) => (
                <li key={index} onClick={() => handleCategoriaChange(cat)}>
                  {cat}
                </li>
              ))
            ) : (
              <li>Nenhuma categoria encontrada</li>
            )}
          </ul>
        )}
      </div>

      <select value={tipo} onChange={handleTipoChange}>
        <option value="">Selecione um tipo</option>
        {tipos.map((t, index) => (
          <option key={index} value={t}>{t}</option>
        ))}
      </select>
    </div>
  );
};

export default Filtro;
