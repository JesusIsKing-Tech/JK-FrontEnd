import React, { useState, useRef } from 'react';

import styled from 'styled-components';
import styles from '../Home/Home2.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import Card from '../../components/TelaHome/CardLouvor/CardLouvor';
import { FaYoutube, FaWhatsapp, FaGithub  } from 'react-icons/fa';

const Home2 = () => {
  const swiperRef = useRef(null);
  const sections = [
    {
      images: [
        { url: 'https://www.pibvm.com.br/mt-content/uploads/2024/01/photo-from-junior-9.jpg' },
        { url: 'https://www.pibvm.com.br/mt-content/uploads/2024/01/photo-from-junior-4.jpg' },
        { url: 'https://www.pibvm.com.br/mt-content/uploads/2024/01/photo-from-junior-14.jpg' }
      ]
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [textValue, setTextValue] = useState("");
  const textAreaRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const nextImage = () => setCurrentImage((currentImage + 1) % sections[0].images.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + sections[0].images.length) % sections[0].images.length);

  const handleInputChange = (e) => {
    const textArea = textAreaRef.current;
    setTextValue(e.target.value);
    textArea.style.height = "100px";
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  return (
    <>
      <HeaderLogado />
      <div className={styles["carousel-container"]}>
        <Swiper
          modules={[Pagination, A11y, Navigation, Scrollbar]}
          slidesPerView={1}
          className={styles["swiper"]}
          navigation
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
        >
          {sections[0].images.map((item, index) => (
            <SwiperSlide key={index} className={styles["swiper-slide"]}>
              <img src={item.url} alt={`Slider ${index + 1}`} className={styles.sliderItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles["louvores-carousel"]}>
        <div className={styles["titulo-louvor"]}>
          <h1>ACOMPANHE NOSSOS VÍDEOS</h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className={styles["carrosel-louvor"]}
          slidesPerView={3}
          navigation
          loop
          spaceBetween={20}
        >
          <SwiperSlide className={styles["slides-card"]}>
            <Card linkVideo={"https://www.youtube.com/embed/W2p7WMC9T-Y"} />
          </SwiperSlide>
          <SwiperSlide className={styles["slides-card"]}>
            <Card linkVideo={"https://www.youtube.com/embed/6KJWfhZtf8c"} />
          </SwiperSlide>
          <SwiperSlide className={styles["slides-card"]}>
            <Card linkVideo={"https://www.youtube.com/embed/ntblNvYeGYs"} />
          </SwiperSlide>
        </Swiper>
        <div className={styles["canal-louvor"]}>
          <a href="https://www.youtube.com/@pibvilamaria">
            <FaYoutube size={30} color='#F5F5F5'></FaYoutube>
            <h3>ACESSE NOSSO CANAL</h3>
          </a>
        </div>
      </div>
      <div className={styles["container-oracao"]}>
        <h2>FIQUE MAIS PRÓXIMO DE NÓS</h2>
        <div className={styles["pedido-oracao-container"]}>
          <div className={styles["versiculo-section"]}>
            <p>
              "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo o entendimento, guardará os seus corações e as suas mentes em Cristo Jesus "
            </p>
            <h2>Filipenses 4:6-7</h2>
          </div>
          <div className={styles["prayer-section"]}>
            <div className={styles.blob}></div> {/* Adicionando a animação de blob */}
            <h2>Pedido de oração</h2>
            {/* <label htmlFor="pessoasOracao">Pessoas para oração</label> */}
            {/* <input type="text" id="pessoasOracao" maxLength={50} /> */}
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
          </div>

        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.iconContainer}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} color="white" className={styles.iconeFooter} />
          </a>
        </div>
        <p className={styles.p}>JIK © 2024. Todos os direitos reservados. Desenvolvido por JESUS IS KING.</p>
        <div className={styles.iconContainer}>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} color="white" className={styles.iconeFooter} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home2;