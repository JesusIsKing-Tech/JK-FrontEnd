import React, { useState } from 'react';
import HeaderLogado from "./components/HeaderLogado/HeaderLogado";
import styled from 'styled-components';
import Card from './components/TelaEstoque/Card/CardMusica';
import Adicionar from './components/TelaEstoque/BotaoAdicionar/Adicionar';
import Dash from './components/TelaEstoque/CardDash/CardDash';
import CardCesta from './components/TelaEstoque/CardCestaBasica/CardCestaBasica';
import PopUp from './components/PopUp/PopUp.jsx';
import PopUpCard from './components/TelaEstoque/PopUpCard/PopUpCard.jsx';
import Filtro from './components/TelaEstoque/FiltroCard/Filtro.jsx';

const Box = styled.div`
  display: flex;
  margin: 60px;
  margin-top: 40px;
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
  max-width: 65vw;
  min-width: 50vw;
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  overflow-y: scroll;  
  max-height: 68vh; 
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
  display: flex-start;
  align-self: center;
  flex-wrap: wrap;
  // position:fixed

`;

const NoResultsMessage = styled.h3`
display:flex;
    align-items: center;
  color: #888; /* Cor para a mensagem de no results */
`;

function Estoque() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isPopUpCardVisible, setIsPopUpCardVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState(''); // Estado para o filtro
  const [isAscending, setIsAscending] = useState(true); // Estado para controle de ordenação

  const cardData = [
    { 
      nome: 'Arroz', 
      quantidade: 4, 
      peso: '1kg',
      tipos: [
        { nome: 'Parboilizado', peso: '1Kg' },
        { nome: 'Branco', peso: '5Kg' },
        { nome: 'Integral', peso: '5Kg' },
        { nome: 'Negro', peso: '1Kg' },
      ]
    },
    { 
      nome: 'Feijão', 
      quantidade: 4, 
      peso: '1kg',
      tipos: [
        { nome: 'Parboilizado', peso: '1Kg' },
        { nome: 'Branco', peso: '5Kg' },
        { nome: 'Integral', peso: '5Kg' },
        { nome: 'Negro', peso: '1Kg' },
      ]
    },
    { 
      nome: 'Óleo', 
      quantidade: 1, 
      peso: '1kg',
      tipos: [
        { nome: 'Parboilizado', peso: '1Kg' },
      ]
    }
  ];

  const openPopUp = (cardInfo) => {
    setSelectedCard(cardInfo);
    setIsPopUpVisible(true);
  };

  const closePopUp = () => {
    setIsPopUpVisible(false);
    setSelectedCard(null);
  };

  const openPopUpCard = (cardInfo) => {
    setSelectedCard(cardInfo);
    setIsPopUpCardVisible(true);
  };

  const closePopUpCard = () => {
    setIsPopUpCardVisible(false);
    setSelectedCard(null);
  };

  // Função para aplicar o filtro
  const handleFilter = (searchTerm) => {
    setFilter(searchTerm);
  };

  // Função para aplicar a ordenação
  const handleSort = (newOrder) => {
    setIsAscending(newOrder);
  };

  // Filtrando os cards com base no nome
  const filteredCards = cardData.filter(card =>
    card.nome.toLowerCase().includes(filter.toLowerCase())
  );

  // Ordenando os cards com base na quantidade
  const sortedCards = filteredCards.sort((a, b) => {
    return isAscending ? a.quantidade - b.quantidade : b.quantidade - a.quantidade;
  });

  return (
    <>
      <HeaderLogado />
      <Box>
        <div>
          <h2>Alimentos em estoque</h2>
          <div>
            <Filtro onFilter={handleFilter} onSort={handleSort} /> {/* Passando as funções de filtro e ordenação */}
            <BoxCard>
              <BoxAdicionar>
                <Adicionar onClick={openPopUp} />
              </BoxAdicionar>
              {sortedCards.length > 0 ? ( // Verifica se há cards filtrados
                sortedCards.map((card, index) => (
                  <Card
                    key={index}
                    {...card}
                    onClick={() => openPopUpCard(card)}
                  />
                ))
              ) : (
                <NoResultsMessage>Nenhum alimento encontrado com esse nome ...</NoResultsMessage> // Mensagem quando não há cards
              )}
            </BoxCard>
          </div>
        </div>
        <BoxLateral>
          <H2>Capacidade do estoque</H2>
          <BoxDash>
            <Dash />
          </BoxDash>
          <H2>Cestas Básicas</H2>
          <BoxDash>
            <CardCesta />
          </BoxDash>
        </BoxLateral>
      </Box>

      {isPopUpVisible && (
        <PopUp closePopUp={closePopUp} cardInfo={selectedCard} />
      )}

      {isPopUpCardVisible && (
        <PopUpCard closePopUpCard={closePopUpCard} cardInfo={selectedCard} />
      )}
    </>
  );
}

export default Estoque;
