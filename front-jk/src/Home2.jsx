import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import logo from './img/logo2.png';
import fotoPerfil from './img/perfil.jpg';
import HeaderLogado from './components/HeaderLogado/HeaderLogado';

// Styled components para layout
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #F0F0F0;
`;

const Aativo = styled.a`
 color:black  ;
`;


const Header = styled.header`
  background-color: #2B4C7E;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;

  nav {
    display: flex;
    align-items: center;

    a {
      margin-right: 20px;
      color: white;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  img {
    height: 50px;
  }

  .profile {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      height: 40px;
      width: 40px;
      margin-left: 10px;
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrayerSection = styled.div`
  background-color: #D9D9D9;
  padding: 20px;
  border-radius: 10px;
  width: 550px;
  height: 50%;

    margin-bottom: 20px;
  margin-right: 20px;

  h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    text-align: ;
    margin-bottom: 25px;

  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;

  }

  textarea {
    resize: none;
    height: 100px;
  }

  button {
    margin-width: -10px;
    width: 100%;
    padding: 10px 0;
    border: none;
    background-color: #2B4C7E;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    &:hover {
      background-color: #1f3a60;
    }
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Section = styled.div`
  background-color: #D9D9D9;
  border-radius: 10px;
  padding: 10px;
  width: 100%;

  h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #000;

  &:hover {
    color: #2B4C7E;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const Home2 = () => {
  const images = [
    'https://jpimg.com.br/uploads/2023/01/design-sem-nome-2023-01-18t104305.427-750x432.png',
    'https://www.tnh1.com.br//fileadmin/_processed_/c/7/csm_deolane_presa_-_foto_montagem_tnh1_3ee9d26e74.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [textValue, setTextValue] = useState(""); // Estado para o valor do textarea
  const textAreaRef = useRef(null);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  // Função para ajustar automaticamente a altura do textarea
  const handleInputChange = (e) => {
    const textArea = textAreaRef.current;
    setTextValue(e.target.value);

    // Redefine a altura para calcular o tamanho correto
    textArea.style.height = "100px";
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  return (
    <Container>
      {/* Cabeçalho */}
      <HeaderLogado>
      </HeaderLogado>

      {/* Conteúdo Principal */}
      <MainContent>
        {/* Seção de Pedido de Oração */}
        <PrayerSection>
          <h2>Pedido de oração</h2>

          {/* Label e Input para Pessoas para oração */}
          <label htmlFor="pessoasOracao">Pessoas para oração</label>
          <input
            type="text"
            id="pessoasOracao"
            maxLength ={50}
            // placeholder="Pessoas para oração"
          />

          {/* Label e Textarea para Motivo de oração */}
          <label htmlFor="motivoOracao">Motivo de oração</label>
          <textarea
            ref={textAreaRef}
            id="motivoOracao"
            // placeholder="Motivo de oração"
            rows="1"
            maxLength ={200}
            value={textValue}
            onChange={handleInputChange}
          />

          <button>Enviar</button>
        </PrayerSection>

        {/* Carrossel de Agenda e Louvores */}
        <CarouselContainer>
          {/* Agenda da Semana */}
          <Section>
            <h2>Agenda da Semana</h2>
            <Carousel>
              <ArrowButton onClick={prevImage}>{"<"}</ArrowButton>
              <ImageContainer>
                <img src={images[currentImage]} alt="Agenda da Semana" />
              </ImageContainer>
              <ArrowButton onClick={nextImage}>{">"}</ArrowButton>
            </Carousel>
          </Section>

          {/* Indicações de Louvores */}
          <Section>
            <h2>Indicações de Louvores</h2>
            <Carousel>
              <ArrowButton onClick={prevImage}>{"<"}</ArrowButton>
              <ImageContainer>
                <img src={images[currentImage]} alt="Indicações de Louvores" />
              </ImageContainer>
              <ArrowButton onClick={nextImage}>{">"}</ArrowButton>
            </Carousel>
          </Section>
        </CarouselContainer>
      </MainContent>
    </Container>
  );
};

export default Home2;
