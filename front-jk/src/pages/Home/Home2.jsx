import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import styles from '../Home/Home2.module.css';
import logo from '../../img/logo2.png';
import fotoPerfil from '../../img/perfil.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #F0F0F0;
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
    margin-bottom: 25px;
    font-size: 1.5rem;
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
  align-itens: center;
  height:100px;
  gap: 20px;
  width: 100%;
`;

const Section = styled.div`
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  align-items: center;

  h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Carousel = styled.div`
  display: flex;
  height: 30vh;
  align-tiens: center;
  justify-content: space-between; 
  width:60vw; 

  img{
   border-radius: 10px;
    width:100%;
    height: 30vh;
  }

  button{
  background: none;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    color: #000;
  }
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
  const swiperRef = useRef(null);
  const sections = [
    {
      images: [
        { url: 'https://cdns-images.dzcdn.net/images/cover/a151086ec946c317fa4db8b2dcd5bf87/0x1900-000000-80-0-0.jpg' },
        { url: 'https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2022/09/816ee3a-Capa-Pra-Te-Contar-os-Meus-Segredos-isadora-pompeo-1024x1024.jpg' },
        { url: 'https://cdns-images.dzcdn.net/images/cover/a151086ec946c317fa4db8b2dcd5bf87/0x1900-000000-80-0-0.jpg' },
        { url: 'https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2022/09/816ee3a-Capa-Pra-Te-Contar-os-Meus-Segredos-isadora-pompeo-1024x1024.jpg' }
      ]
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [textValue, setTextValue] = useState("");
  const textAreaRef = useRef(null);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % sections[0].images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + sections[0].images.length) % sections[0].images.length);
  };

  const handleInputChange = (e) => {
    const textArea = textAreaRef.current;
    setTextValue(e.target.value);
    textArea.style.height = "100px";
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  return (
    <Container>
      <HeaderLogado />

      <MainContent>
        <PrayerSection>
          <h2>Pedido de oração</h2>
          <label htmlFor="pessoasOracao">Pessoas para oração</label>
          <input type="text" id="pessoasOracao" maxLength={50} />
          <label htmlFor="motivoOracao">Motivo de oração</label>
          <textarea
            ref={textAreaRef}
            id="motivoOracao"
            rows="1"
            maxLength={200}
            value={textValue}
            onChange={handleInputChange}
          />
          <button>Enviar</button>
        </PrayerSection>

        <CarouselContainer>
          <Section>
            <h2>Agenda da Semana</h2>
            <Carousel>
            <button onClick={() => swiperRef.current.slidePrev()}>
            <FaChevronLeft size={30} color="black" />
          </button>
            <Swiper
              modules={[Pagination, A11y, Navigation, Scrollbar]}
              slidesPerView={2}
              spaceBetween={90}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
            >
              {sections[0].images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.url} alt={`Slider ${index + 1}`} className={styles.sliderItem} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button onClick={() => swiperRef.current.slideNext()}>
            <FaChevronRight size={30} color="black" />
          </button>
            </Carousel>
          </Section>

          <Section>
            <h2>Indicações de Louvores</h2>
            <Carousel>
            <button onClick={() => swiperRef.current.slidePrev()}>
            <FaChevronLeft size={30} color="black" />
          </button>
            <Swiper
              modules={[Pagination, A11y, Navigation, Scrollbar]}
              slidesPerView={2}
              spaceBetween={90}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
            >
              {sections[0].images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.url} alt={`Slider ${index + 1}`} className={styles.sliderItem} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button onClick={() => swiperRef.current.slideNext()}>
            <FaChevronRight size={30} color="black" />
          </button>
            </Carousel>
          </Section>
        </CarouselContainer>
      </MainContent>
    </Container>
  );
};

export default Home2;
