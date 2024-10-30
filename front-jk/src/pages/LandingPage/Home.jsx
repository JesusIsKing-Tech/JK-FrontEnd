import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import imagem from '../../img/logo.png';
import styles from "./Home.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Home = () => {
  const swiperRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const sections = [
    {
      images: [
        {
          url: 'https://s2-ge.glbimg.com/eo-8NS6W8URb1-hdIQ-caGTV2Yk=/0x0:4672x3280/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/m/a/mZ7ic4TZ6TrVaihvErAA/97.jpg',
          title: 'Perguntas Frequentes',
          text: 'Simplificando a gestão de igrejas com uma plataforma integrada.'
        },
        {
          url: 'https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2021/12/libertadores-2021-hotsite-2.jpg',
          title: 'Valores',
          text: 'Centralizando o controle de doações e facilitando a comunicação.'
        },
        {
          url: 'https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2022/11/52490498335_dd057e057e_o.jpg',
          title: 'Sobre Nós',
          text: 'Somos uma equipe focada em melhorar a gestão de igrejas por meio de uma solução inovadora e simples. Nosso sistema centraliza o controle de doações, facilita a comunicação interna e automatiza o agendamento de reuniões, permitindo que os líderes religiosos concentrem-se em sua missão espiritual enquanto cuidamos da parte administrativa.'
        }
      ]
    }
  ];

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <img src={imagem} alt="Logo" />
        <nav className={styles.nav}>
          <a href="#faq" onClick={() => goToSlide(0)}>Perguntas frequentes</a>
          <a href="#values" onClick={() => goToSlide(1)}>Valores</a>
          <a href="#about" onClick={() => goToSlide(2)}>Sobre nós</a>
          <div className={styles.buttonsContainer}>
          <Link to="/Login"><button className={styles.login}>Login</button></Link>
          <Link to="/cadastro" ><button className={styles.signup}>Cadastro</button></Link>
          </div>
        </nav>
      </header>

      <main className={styles.mainContainer}>
        <div className={styles.sobreNosCard}>
          <img src={sections[0].images[currentImage].url} alt={`Slide ${currentImage + 1}`} />
          <h3>{sections[0].images[currentImage].title}</h3>
          <p>{sections[0].images[currentImage].text}</p>
        </div>

        <div className={styles.carousel}>
          <button onClick={() => swiperRef.current.slidePrev()}>
            <FaChevronLeft size={30} color="black" />
          </button>
          <Swiper
            modules={[Pagination, A11y, Navigation, Scrollbar]}
            slidesPerView={1}
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
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.iconContainer}>
          <a href="#">
            <FaGithub size={20} color="blue" />
          </a>
        </div>
        <p>JIK © 2024. Todos os direitos reservados. Desenvolvido por JESUS IS KING.</p>
        <div className={styles.iconContainer}>
          <a href="#">
            <FaWhatsapp size={20} color="blue" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
