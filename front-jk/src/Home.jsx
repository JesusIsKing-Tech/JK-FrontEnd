import React, { useState } from 'react';
import styled from 'styled-components';
import imagem from './img/logo.png'
import { useNavigation } from '@react-navigation/native';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #DCE0E6;

  img {
    height: 50px;
    cursor: pointer;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
}



  nav {
    display: flex;
    gap: 20px;

    a {
      align-items: center;
      display: flex;
      text-decoration:underline;
      /* text-decoration:line; */
      color: #333;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: #2c5cc5;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    &.login {
      background-color: #2B4C7E;
      color: white;
    }

    &.signup {
      background-color: #fff;
      color: #2B4C7E;
      border: 2px solid #2B4C7E;
      :hover{
        background-color: #ffffff72;
      }
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(to right, #4E8AE4, #2B4C7E);
  height: calc(100vh - 100px);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const AboutUsCard = styled.div`
  background-color: #DCE0E6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 10px;
    width: 100%;
  }

  h3 {
    margin-top: 15px;
    color: #2c5cc5;
  }

  p {
    color: #333;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

const Carousel = styled.div`
  /* background-color: #fff; */
  border-radius: 10px;
  width: 60%;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 10px;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #000000;
    padding: 10px;

    &:hover {
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Footer = styled.footer`
  background-color: #f0f3f7;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px;

  svg {
    cursor: pointer;
    &:hover {
      color: #2c5cc5;
    }
  }
`;

const Home = () => {
  const navigation = useNavigation();

  const sections = {
    about: {
      title: "Sobre nós",
      images: [
        { url: 'https://abcnews.go.com/images/Entertainment/GTY_cristiano_ronaldo_8_jtm_150203_23x16_1600.jpg', text: "Simplificando a gestão de igrejas. Nossa solução oferece uma plataforma completa para igrejas, centralizando o controle de doações, facilitando a comunicação entre os membros e automatizando tarefas administrativas. Assim, os líderes religiosos podem se dedicar integralmente à sua missão espiritual." }
      ]
    },
    faq: {
      title: "Perguntas Frequentes",
      images: [
        { url: 'https://www.prensalibre.com/wp-content/uploads/2019/06/FBL-EUR-NATIONS-POR-NED_45213397.jpg?quality=82', text: "Pergunta 2: Como me cadastrar?" }
      ]
    },
    values: {
      title: "Valores",
      images: [
        { url: 'https://th.bing.com/th/id/OIP.p4DhnJ6ghVxV5wBW_llamgHaE7?rs=1&pid=ImgDetMain', text: "Foco em resultados." }
      ]
    }
  };

  const [currentSection, setCurrentSection] = useState('about');
  const [currentImage, setCurrentImage] = useState(0);

  const sectionKeys = Object.keys(sections);

  const nextImage = () => {
    const nextSectionIndex = (sectionKeys.indexOf(currentSection) + 1) % sectionKeys.length;
    setCurrentSection(sectionKeys[nextSectionIndex]);
    setCurrentImage(0); // Reset para a primeira imagem da nova seção
  };

  const prevImage = () => {
    const prevSectionIndex = (sectionKeys.indexOf(currentSection) - 1 + sectionKeys.length) % sectionKeys.length;
    setCurrentSection(sectionKeys[prevSectionIndex]);
    setCurrentImage(0); // Reset para a primeira imagem da nova seção
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    setCurrentImage(0); // Resetar o carrossel para a primeira imagem da nova seção
  };

  return (
    <>
      <Header>
        <img src={imagem} alt="Logo"  />
        <nav>
          <a onClick={() => handleSectionChange('faq')}>Perguntas frequentes</a>
          <a onClick={() => handleSectionChange('values')}>Valores</a>
          <a onClick={() => handleSectionChange('about')}>Sobre nós</a>
          <ButtonsContainer>
            <button onClick={useNavigation} className="login">Login</button>
            <button className="signup">Cadastro</button>
          </ButtonsContainer>
        </nav>
      </Header>

      <MainContainer>
        <AboutUsCard>
          <img src={sections[currentSection].images[currentImage].url} alt={sections[currentSection].title} />
          <h3>{sections[currentSection].title}</h3>
          <p>{sections[currentSection].images[currentImage].text}</p>
        </AboutUsCard>

        <Carousel>
          <button onClick={prevImage}>{"<"}</button>
          <img src={sections[currentSection].images[currentImage].url} alt="Slide" />
          <button onClick={nextImage}>{">"}</button>
        </Carousel>
      </MainContainer>

      <Footer>
        <IconContainer>
          <a href="#"><i className="fa fa-instagram">Github</i></a>
        </IconContainer>
        <p>
          JIK © 2024. Todos os direitos reservados. Desenvolvido por JESUS IS KING.
        </p>
        <IconContainer>
          <a href="#"><i className="fa fa-instagram">insta</i></a>
        </IconContainer>
      </Footer>
    </>
  );
};

export default Home;
