import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './img/logo2.png'
import fotoPerfil from'./img/perfil.jpg'

// Styled components for the layout
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background-color: #2B4C7E;
  display: flex;
  justify-content: space-between;
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
   img{
    /* border-radius: 50%; */
      height: 10vh;
      width: 7vw;
      margin-left: 10px;
   }

  .profile {
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      border-radius: 50%;
      height:40px;
      width: 40px;
      margin-left: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
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
  background-color: #a3a3a364;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  height: 50%;
  max-width: 300px;

  h2 {
    margin-bottom: 20px;
    font-size: 1.2rem;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button{
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;


  }

`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 20px;
  }
`;

const Section = styled.div`
  background-color: #a3a3a364;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  
  

  h2 {
    margin-bottom: 10px;
    font-size: 1.2rem;
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
  // Image placeholders
  const images = [
    'https://jpimg.com.br/uploads/2023/01/design-sem-nome-2023-01-18t104305.427-750x432.png', // Replace with actual paths
    'https://www.tnh1.com.br//fileadmin/_processed_/c/7/csm_deolane_presa_-_foto_montagem_tnh1_3ee9d26e74.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <img src={logo} alt="Logo" />
        <nav>
          <a href="#">Notícias</a>
          <a href="#">Doe</a>
        </nav>
        <div className="profile">
          <img src={fotoPerfil} alt="Profile" />
          <span>Meu perfil</span>
        </div>
      </Header>

      {/* Main Content */}
          <h2>Pedido de oração</h2>
      <MainContent>
        {/* Prayer Request Section */}
        <PrayerSection>
          <h3>Pessoa para oração</h3>
          <input type="text" placeholder="Pessoas para oração" />
          <h3>Motivo de oração</h3>
          <input placeholder="Motivo de oração" rows="4"></input>
          <button>Enviar </button>
        </PrayerSection>

        {/* Agenda and Worship Carousels */}
        <CarouselContainer>
          {/* Agenda da Semana */}
            <h3>Agenda da Semana</h3>
          <Section>
            <Carousel>
              <ArrowButton onClick={prevImage}>{"<"}</ArrowButton>
              <ImageContainer>
                <img src={images[currentImage]} alt="Agenda da Semana" />
              </ImageContainer>
              <ArrowButton onClick={nextImage}>{">"}</ArrowButton>
            </Carousel>
          </Section>

          {/* Indicações de Louvores */}
            <h3>Indicações do Louvores</h3>
          <Section>
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
