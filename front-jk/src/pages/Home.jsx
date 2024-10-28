import React, { useRef, useState } from 'react';
import imagem from '../img/logo.png';
import styles from "./Home.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const swiperRef = useRef(null);

  // Dados dos slides (imagens, títulos e textos)
  const sections = [
    {
      title: 'Gestão de Igrejas',
      images: [
        {
          url: 'https://s2-ge.glbimg.com/eo-8NS6W8URb1-hdIQ-caGTV2Yk=/0x0:4672x3280/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/m/a/mZ7ic4TZ6TrVaihvErAA/97.jpg',
          text: 'Simplificando a gestão de igrejas com uma plataforma integrada.'
        },
        {
          url: 'https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2021/12/libertadores-2021-hotsite-2.jpg',
          text: 'Centralizando o controle de doações e facilitando a comunicação.'
        },
        {
          url: 'https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2022/11/52490498335_dd057e057e_o.jpg',
          text: 'Automatizando tarefas administrativas.'
        },
        {
          url: 'https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2023/12/IMG_5376.jpg',
          text: 'Permitindo que líderes religiosos se dediquem à missão espiritual.'
        }
      ]
    }
  ];

  // Estado para armazenar o índice do slide atual
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <header className={styles.header}>
        <img src={imagem} alt="Logo" />
        <nav className={styles.nav}>
          <a href="#faq">Perguntas frequentes</a>
          <a href="#values">Valores</a>
          <a href="#about">Sobre nós</a>
          <div className={styles.buttonsContainer}>
            <button className={styles.login}>Login</button>
            <button className={styles.signup}>Cadastro</button>
          </div>
        </nav>
      </header>

      <main className={styles.mainContainer}>
        {/* Seção à esquerda que muda dinamicamente */}
        <div className={styles.sobreNosCard}>
          <img src={sections[0].images[currentImage].url} alt={sections[0].title} />
          <h3>{sections[0].title}</h3>
          <p>{sections[0].images[currentImage].text}</p>
        </div>

        {/* Carrossel à direita */}
        <div className={styles.carousel}>
          <button onClick={() => swiperRef.current.slidePrev()}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <Swiper
            modules={[Pagination, A11y, Navigation, Scrollbar]}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)} // Atualiza o slide ativo
          >
            {sections[0].images.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.url} alt={`Slider ${index + 1}`} className={styles.sliderItem} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button onClick={() => swiperRef.current.slideNext()}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.iconContainer}>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <p>JIK © 2024. Todos os direitos reservados. Desenvolvido por JESUS IS KING.</p>
        <div className={styles.iconContainer}>
          <a href="#" FontAwesomeIcon icon={faWhatsapp}>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
