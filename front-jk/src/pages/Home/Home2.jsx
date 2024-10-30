import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import styles from '../Home/Home2.module.css';
// import logo from '../../img/logo2.png';
// import fotoPerfil from '../../img/perfil.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #F0F0F0;
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
  align-items: center;
  height: 100px;
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
  align-items: center;
  justify-content: space-between; 
  width: 60vw; 

  img {
    border-radius: 10px;
    width: 100%;
    height: 30vh;
  }

  button {
    background: none;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    color: #000;
  }
`;

// const ModalBackground = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const ModalContent = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 10px;
//   width: 80%;
//   max-width: 500px;
// `;


const Home2 = () => {
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);
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

  const sections2 = [
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
  // const [isModalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  // const nextImage = () => {
  //   setCurrentImage((currentImage + 1) % sections[0].images.length);
  // };

  // const prevImage = () => {
  //   setCurrentImage((currentImage - 1 + sections[0].images.length) % sections[0].images.length);
  // };

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
          <button>Enviar</button >
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
              <button onClick={() => swiperRef2.current.slidePrev()}>
                <FaChevronLeft size={30} color="black" />
              </button>
              <Swiper
                modules={[Pagination, A11y, Navigation, Scrollbar]}
                slidesPerView={2}
                spaceBetween={90}
                onSwiper={(swiper) => {
                  swiperRef2.current = swiper;
                }}
                onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
              >
                {sections2[0].images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item.url} alt={`Slider ${index + 1}`} className={styles.sliderItem} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button onClick={() => swiperRef2.current.slideNext()}>
                <FaChevronRight size={30} color="black" />
              </button>
            </Carousel>
          </Section>
        </CarouselContainer>

        {/* <button onClick={openModal}>Abrir Modal</button> */}

        {/* {isModalOpen && (
          <ModalBackground onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <h2>Meu Modal</h2>
              <p>Conteúdo do modal aqui.</p>
              <button onClick={closeModal}>Fechar</button>
            </ModalContent>
          </ModalBackground>
        )} */}
      </MainContent>
    </Container>
  );
};

export default Home2;