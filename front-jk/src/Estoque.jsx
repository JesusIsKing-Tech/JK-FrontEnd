import React, { useState } from 'react';
import HeaderLogado from "./components/HeaderLogado/HeaderLogado";
import styled from 'styled-components';
import Card from './components/TelaEstoque/Card/CardMusica';
import Adicionar from './components/TelaEstoque/BotaoAdicionar/Adicionar';
import Dash from './components/TelaEstoque/CardDash/CardDash';
import CardCesta from './components/TelaEstoque/CardCestaBasica/CardCestaBasica';
import PopUp from './components/PopUp/PopUp.jsx'; // Apenas .js se estiver correto
import Filtro from './components/TelaEstoque/FiltroCard/Filtro.jsx'; // Apenas .js se estiver correto


const Box = styled.div`
  display: flex;
  margin: 60px;
  margin-top: 10px;
  justify-content: space-between; 
`;

const BoxDash = styled.div`
  display: flex;
  align-self: center;
  justify-content: center; 
  margin-bottom: 30px;
`;

const BoxCard = styled.div`
  background-color: #DCE0E6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 60vw;
  display: flex;
  margin: 20px;
  justify-content: space-evenly; 
  flex-wrap: wrap;
  overflow-y: scroll;  
  max-height: 700px; 
`;

const BoxLateral = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
  display: flex;
  justify-content: center; 
`;

const BoxAdicionar = styled.div`
  background-color: #DCE0E6;
  border-radius: 10px;
  display: flex;
  align-self: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1700px) {
    .card-musica {
      width: 10vw;
    }
  }
  
  @media screen and (max-width: 1450px) {
    .card-musica {
      width: 13vw;
      height: 15vh;
    }
  }
`;

function Estoque() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const openPopUp = () => {
    setIsPopUpVisible(true);
  };

  const closePopUp = () => {
    setIsPopUpVisible(false);
  };
  const [filtros, setFiltros] = useState({});
  const categorias = ["Arroz", "Café", "Farinha", "Feijão", "Macarrão", "Óleo"];
  const tipos = ["Tipo 1", "Tipo 2", "Tipo 3"];

  const handleFilterChange = (newFilters) => {
    setFiltros(newFilters);
  };

  return (
    <>
      <HeaderLogado />
      <Box>
        <div>
          <h2>Alimentos em estoque</h2>

          {/* <Filtro
        categorias={categorias}
        tipos={tipos}
        onFilterChange={handleFilterChange}
      /> */}
          <BoxCard>
           <BoxAdicionar>
            <Adicionar onClick={openPopUp} />
            </BoxAdicionar>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </BoxCard>
        </div>

        <BoxLateral>
          <H2>Capacidade do estoque</H2>
          <BoxDash>
            <Dash />
          </BoxDash>
          <H2>Cesta Básica</H2>
          <BoxDash>
            <CardCesta />
          </BoxDash>
        </BoxLateral>
      </Box>

      {isPopUpVisible && (
        <PopUp closePopUp={closePopUp} />
      )}
    </>
  );
}

export default Estoque;
