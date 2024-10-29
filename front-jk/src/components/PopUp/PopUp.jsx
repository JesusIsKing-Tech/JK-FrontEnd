import React, { useState, useEffect, useRef } from 'react';
import { notify } from '../Toast'; 
import { notifySuccess } from '../Toast'; 
import styles from "./PopUp.module.css";

const PopUp = ({ closePopUp }) => {
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('');
  const [peso, setPeso] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const popupRef = useRef(null); // Referência para o contêiner do popup

  const categorias = [
    "Arroz",
    "Café",
    "Farinha",
    "Feijão",
    "Macarrão",
    "Óleo"
  ];

  const filteredCategories = categorias.filter(cat => 
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validateCategoria = (input) => {
    return categorias.includes(input);
  };

  const handleCategoriaChange = (cat) => {
    setCategoria(cat);
    setSearchTerm(cat);
    setIsDropdownOpen(false);
    setTipo(''); // Reseta o tipo quando uma nova categoria é selecionada
  };

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsDropdownOpen(true);

    // Revalida a categoria com o novo termo de pesquisa
    if (validateCategoria(value)) {
      setCategoria(value);
      setTipo(''); // Reseta o tipo quando a categoria é validada
    } else {
      setCategoria(''); // Se não for válido, limpa a categoria
    }
  };

  const handleTipoChange = (event) => {
    setTipo(event.target.value);
  };

  const handlePesoChange = (event) => {
    const value = event.target.value;
    const numericValue = Number(value);

    if (!isNaN(numericValue) && numericValue > 0) {
      setPeso(value);
    } else if (value.trim() === '') {
      setPeso('');
    }
  };

  const handleQuantidadeChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.trim() !== '') {
      setQuantidade(Number(value));
    } else {
      setQuantidade('');
    }
  };

  const handleQuantidadeBlur = () => {
    if (quantidade === '' || quantidade <= 0) {
      setQuantidade(1);
    }
  };

  const handlePesoBlur = () => {
    if (peso === '' || Number(peso) <= 0) {
      notify('O peso deve ser maior que zero!');
      setPeso('');
    }
  };

  const handleIncrement = () => {
    setQuantidade(quantidade + 1);
  };

  const handleDecrement = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const handleSubmit = () => {
    if (categoria === '' || tipo === '' || peso === '' || Number(peso) <= 0 || quantidade <= 0) {
      notify('Todos os campos devem ser preenchidos corretamente!');
      return;
    }

    console.log('Categoria:', categoria);
    console.log('Tipo:', tipo);
    console.log('Peso:', peso);
    console.log('Quantidade:', quantidade);
  
    notifySuccess('Cadastro realizado com sucesso!');

    setTimeout(() => {
      closePopUp();
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopUp(); // Fecha o popup ao clicar fora
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closePopUp]);

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup} ref={popupRef}>
        <h2 className={styles.popupTitle}>Cadastro de alimento</h2>
        <button className={styles.closeButton} onClick={closePopUp}>
          X
        </button>

        <div className={styles.formGroup}>
          <label htmlFor="search">Categoria</label>
          <div className={styles.dropdown} ref={dropdownRef}>
            <input
              type="text"
              value={searchTerm}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onChange={handleSearchTermChange}
              placeholder="Digite para pesquisar..."
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
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tipo">Tipo</label>
          <select
            id="tipo"
            value={tipo}
            onChange={handleTipoChange}
            disabled={!validateCategoria(categoria)} // Desabilita o seletor se a categoria não for válida
            className={!validateCategoria(categoria) ? styles.disabled : ''} // Adiciona classe disabled se estiver desabilitado
          >
            <option value="">Selecione um tipo</option>
            <option value="Tipo1">Tipo 1</option>
            <option value="Tipo2">Tipo 2</option>
            <option value="Tipo3">Tipo 3</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="peso">Peso</label>
          <input
            id="peso"
            type="number"
            value={peso}
            onChange={handlePesoChange}
            onBlur={handlePesoBlur}
            placeholder="Digite o peso..."
            min="0"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="quantidade">Quantidade</label>
          <div className={styles.inputGroup}>
            <button className={styles.decrementButton} onClick={handleDecrement}>
              -
            </button>
            <input
              id="quantidade"
              type="number"
              value={quantidade}
              onChange={handleQuantidadeChange}
              onBlur={handleQuantidadeBlur}
              min="1"
            />
            <button className={styles.incrementButton} onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>

        <button className={styles.submitButton} onClick={handleSubmit}>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default PopUp;
