import React, { useState, useEffect, useRef } from 'react';
import { notify, notifySuccess } from '../Toast';
import styles from "./PopUp.module.css";
import api from "../../api";
import Swal from 'sweetalert2';


const PopUp = ({ closePopUp, cardInfo }) => {

  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('');
  const [peso, setPeso] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [imagem, setImagem] = useState(null); // Novo estado para a imagem
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tipos, setTipos] = useState([]);
  const dropdownRef = useRef(null);
  const popupRef = useRef(null);

  const categorias = [cardInfo.nome];

  const filteredCategories = categorias.filter(cat =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validateCategoria = (input) => categorias.includes(input);

  const handleCategoriaChange = (cat) => {
    setCategoria(cat);
    setSearchTerm(cat);
    setIsDropdownOpen(false);
    setTipo('');
  };

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsDropdownOpen(true);
    if (validateCategoria(value)) {
      setCategoria(value);
      setTipo('');
    } else {
      setCategoria('');
    }
  };

  const handleTipoChange = (event) => setTipo(event.target.value);

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

  const handleIncrement = () => setQuantidade(quantidade + 1);

  const handleDecrement = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImagem(file);
  };

  const handleSubmit = async () => {

    const data = {
      peso_litro: peso,
      quantidade: quantidade,
      categoria:{
        id: cardInfo.id
      },
      tipo:{
        id: tipo
      },
    }

    try{
      const responde = await api.post('/produtos/multiplo', data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        },
    });

    Swal.fire({
      icon: 'success',
      title: 'Alimento adicionado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });
    
    setTimeout(() => {
      window.location.reload();
    }, 1000);


    }
    catch(error){
      Swal.fire({
        icon: 'error',
        title: 'Erro ao adicionar alimento!',
        showConfirmButton: false,
        timer: 1500
      });
    };
  };

    

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopUp();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closePopUp]);

  useEffect(()  => {
    const fetchTipos = async () => {
      try{
        const response = await api.get(`/produtos/tipos/by-categoria/${cardInfo.id}`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });

        const tiposData = response.data;

        setTipos(tiposData);

        console.log('TIPOS', tiposData);
        console.log(cardInfo.id);
        
        
      }catch(error){
        console.error(error);
      }
    };

    fetchTipos();
  }, []);

  return (
    <div className={styles.popupContainer}>    
      <div className={styles.popup}>
        <h2 className={styles.popupTitle}>Adição de alimento</h2>
        <button className={styles.closeButton} onClick={closePopUp}>X</button>

        <div className={styles.formGroup}>
          <label htmlFor="search">Categoria</label>
          <div className={styles.dropdown} ref={dropdownRef}>
            <input
              type="text"
              value={categorias}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onChange={handleSearchTermChange}
              placeholder="Digite para pesquisar..."
              readOnly = {true}
            />
            {isDropdownOpen && (
              <ul className={styles.dropdownList}>
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((cat, index) => (
                    <li key={index} onClick={() => handleCategoriaChange(cat)}>{cat}</li>
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
            disabled={false}
            className={false ? styles.disabled : ''}
          >
            <option value="">Selecione um tipo</option>
            {tipos.map((tipo, index) => (
              <option key={index} value={tipo.id}>{tipo.nome}</option>
            ))}
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
            placeholder="Digite o peso em kg..."
            min="0"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="quantidade">Quantidade</label>
          <div className={styles.inputGroup}>
            <button className={styles.decrementButton} onClick={handleDecrement}>-</button>
            <input
              id="quantidade"
              type="number"
              value={quantidade}
              onChange={handleQuantidadeChange}
              onBlur={handleQuantidadeBlur}
              min="1"
            />
            <button className={styles.incrementButton} onClick={handleIncrement}>+</button>
          </div>
        </div>

        {/* <div className={styles.formGroup}>
          <label htmlFor="imagem">Imagem</label>
          <input
            id="imagem"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          /> */}
        {/* </div> */}

        <button className={styles.submitButton} onClick={handleSubmit}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default PopUp;
