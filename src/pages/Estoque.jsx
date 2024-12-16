import React, { useEffect, useState } from 'react';
import HeaderLogado from "../components/HeaderLogado/HeaderLogado.jsx";
import styled from 'styled-components';
import Card from '../components/TelaEstoque/Card/CardMusica.jsx';
import Adicionar from '../components/TelaEstoque/BotaoAdicionar/Adicionar.jsx';
import Dash from '../components/TelaEstoque/CardDash/CardDash.jsx';
import CardCesta from '../components/TelaEstoque/CardCestaBasica/CardCestaBasica.jsx';
import PopUp from '../components/PopUp/PopUp.jsx';
import PopUpCard from '../components/TelaEstoque/PopUpCard/PopUpCard.jsx';
import Filtro from '../components/TelaEstoque/FiltroCard/Filtro.jsx';
import api from "../api";
import Swal from 'sweetalert2';

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
  flex-direction: row;
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
  border: 10px solid green;
`;

const NoResultsMessage = styled.h3`
  display: flex;
  align-items: center;
  color: #888;
`;

function Estoque() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isPopUpCardVisible, setIsPopUpCardVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState(''); // Estado para o filtro
  const [sortOrder, setSortOrder] = useState(0); // Estado para controle de ordenação
  
  const [produtos, setProdutos] = useState([]);

  const [produtosCarregados, setProdutosCarregados] = useState(false);

  const [categoriasData, setCategoriasData] = useState([]);

  const cardBase = [
    {
      id: 1,
      nome: 'Arroz',
      quantidade: 4,
      peso: '1kg',
      tipos: [
        { nome: 'Grão', peso: '1kg' },
        { nome: 'Alimento Básico', peso: '1kg' },
      ],
    }
  ]

  const cardData = [
    {
      nome: 'Arroz',
      quantidade: 4,
      peso: '1kg',
      tipos: [
        { nome: 'Grão', peso: '1kg' },
        { nome: 'Alimento Básico', peso: '1kg' },
      ],
    },
    {
      nome: 'Feijão',
      quantidade: 4,
      peso: '1kg',
      tipos: [
        { nome: 'Grão', peso: '1kg' },
        { nome: 'Alimento Básico', peso: '1kg' }
      ],
    },
    {
      nome: 'Água',
      quantidade: 1,
      peso: '1kg',
      tipos: [{ nome: 'Bebida', peso: '1kg' }],
    },
    {
      nome: 'Atum',
      quantidade: 6,
      peso: '1kg',
      tipos: [{ nome: 'Conserva', peso: '1kg' }],
    },
    {
      nome: 'Óleo',
      quantidade: 1,
      peso: '1kg',
      tipos: [{ nome: 'Condimento', peso: '1kg' }],
    }
  ];

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get('/produtos/categorias',{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      const produtosCompletos = response.data.map(produto => ({
        ...produto,
        quantidade: produto.quantidade,
        peso: produto.peso,
        tipos: []
      }));


        setProdutos(produtosCompletos)
        setCategoriasData(response.data);
        setProdutosCarregados(true);

      } catch (error) {
        console.error(error);
      }
    };
    fetchProdutos();
  }, []);

  useEffect(() => {

    if (!produtosCarregados) return;

    const fetchProdutos = async () => {
      try {
        const response = await api.get('/produtos',{
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });

        const tiposData = response.data;
        
        const produtosAtualizados = [...produtos];

        produtosAtualizados.forEach(produto => {
          tiposData.forEach(tipo => {
            if (produto.id === tipo.categoria.id) {
              produto.tipos.push({
                nome: tipo.tipo.nome,
                peso: tipo.peso
              });
              produto.quantidade = produto.tipos.length
            }
          });
          
          var pesoTotal = 0;

          for (let i = 0; i < produto.tipos.length; i++) {
            pesoTotal += produto.tipos[i].peso;
          }
          produto.peso = pesoTotal + " kg";
        });



        setProdutos(produtosAtualizados);
        setProdutosCarregados(true);

      } catch (error) {
        console.error(error);
      }
    };
    fetchProdutos();
  }, [produtosCarregados]);





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

  const handleSort = (newOrder) => {
    setSortOrder(newOrder);
  };

  // Filtrando os cards com base no nome
  const filteredCards = produtos.filter(card =>
    card.nome.toLowerCase().includes(filter.toLowerCase())
  );

  // Ordenando os cards filtrados com base no estado de sortOrder
  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortOrder === 0) {
      return a.nome.localeCompare(b.nome); // Ordem alfabética
    } else if (sortOrder === 1) {
      return a.quantidade - b.quantidade; // Ordem crescente
    } else {
      return b.quantidade - a.quantidade; // Ordem decrescente
    }
  });

  const montarCesta = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await api.post('/produtos/cesta-basica',{
          headers: {
            Authorization : `Bearer ${token}`
          }
        });

    Swal.fire({
      icon: 'success',
      title: 'Cesta Básica montada com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });

    setTimeout(() => {
      window.location.reload();
    }
    , 2000);

    
    } catch (error) {
    console.error(error);
    console.warn(token)
    Swal.fire({
      icon: 'error',
      title: 'Erro ao montar cesta básica! ' + error.response.data.message,
      showConfirmButton: false,
      timer: 1500
    });
  }
}

const [quantidadeCesta, setQuantidadeCesta] = useState('');

useEffect(() => {
  const fetchQuantidadeCesta = async () => {
    try {
      const response = await api.get('/produtos/cesta-basica',{
        headers: {
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(response.data.length);
      console.log(response.data);
      setQuantidadeCesta(response.data.length);

    } catch (error) {
      console.error(error);
    }
  }
  fetchQuantidadeCesta();
}
, [quantidadeCesta]);
const [top5MenosItens, setTop5MenosItens] = useState([]);

useEffect(() => {
  // Atualiza o Top 5 sempre que os produtos forem carregados
  if (produtos.length > 0) {
    const top5 = getTop5MenosItens(produtos);
    setTop5MenosItens(top5);
  }
}, [produtos]);

const getTop5MenosItens = (produtos) => {
  // Ordena os produtos por quantidade crescente e pega os 5 primeiros
  return [...produtos]
    .sort((a, b) => a.quantidade - b.quantidade)
    .slice(0, 5);
};

  return (
    <>
      <HeaderLogado />
      <Box>
        <div>
          <div>
            <Filtro onFilter={handleFilter} onSort={handleSort} /> {/* Passando as funções de filtro e ordenação */}
            <BoxCard>
              {/* {produtos.length === 0 ? (
                <NoResultsMessage>Carregando...</NoResultsMessage>
              ) : (
                produtos.map((produto, index) => (
                  <Card
                    key={index}
                    {...produto}
                    onClick={() => openPopUpCard(produto)}
                  />
                ))
              )} */}
              {produtos.length > 0 ? ( // Verifica se há cards filtrados
                sortedCards.map((card, index) => (
                  <Card
                    key={index}
                    {...card}
                    onClick={() => openPopUpCard(card)}
                  />
                ))
              ) : (
                <NoResultsMessage>Carregando ...</NoResultsMessage> // Mensagem quando não há cards
              )}
            </BoxCard>
          </div>
        </div>
        <BoxLateral>
          <H2>Capacidade do estoque</H2>
          <BoxDash>
            <Dash quantidade={quantidadeCesta} />
          </BoxDash>
          <H2>Cestas Básicas</H2>
          <BoxDash>
            <CardCesta onClick={montarCesta} quantidade={quantidadeCesta} />
          </BoxDash>
          <H2>Top 5 Menos Itens</H2>
  {/* <BoxDash>
    <ul>
      <li>arroz: 3 itens</li>
      <li>arroz: 3 itens</li>
      <li>arroz: 3 itens</li>
      <li>arroz: 3 itens</li>
      <li>arroz: 3 itens</li>
      {top5MenosItens.map((item, index) => (
        <li key={index}>
          {item.nome}: {item.quantidade} itens
        </li>
      ))}
    </ul>
  </BoxDash> */}
        </BoxLateral>
      </Box>

      {isPopUpVisible && produtosCarregados &&
      (
        
        <PopUp closePopUp={closePopUp} categoriasData={categoriasData} />
      )}

      {isPopUpCardVisible && (
        <PopUpCard closePopUpCard={closePopUpCard} cardInfo={selectedCard} />
      )}
    </>
  );
}

export default Estoque;
