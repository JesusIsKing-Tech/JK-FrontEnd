import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import imagem from '../../img/logo.png';
import carrossel1 from '../../img/home1.jpeg';
import carrossel2 from '../../img/home2.jpeg';
import carrossel3 from '../../img/home3.jpeg';
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
          url: carrossel1,
          title: 'Perguntas Frequentes',
          text: 'O sistema é acessível a todos os membros, facilitando a comunicação e gestão das doações de alimentos. Ele é seguro e segue a LGPD, garantindo privacidade. Além disso, oferece dashboards de acompanhamento e relatórios para líderes, promovendo engajamento e transparência na igreja.'
        },
        {
          url: carrossel2,
          title: 'Valores',
          text: 'O projeto de gestão para igrejas tem um forte valor social ao otimizar a distribuição de doações, tornando-as mais eficientes e transparentes. Com comunicação aprimorada e controle centralizado, ele fortalece o papel da igreja no apoio à comunidade, aumentando o impacto das ações de solidariedade.'
        },
        {
          url: carrossel3,
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
            <FaChevronLeft size={30} color="white" />
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
            <FaChevronRight size={30} color="white" />
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.iconContainer}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} color="blue" />
          </a>
        </div>
        <p>JIK © 2024. Todos os direitos reservados. Desenvolvido por JESUS IS KING.</p>
        <div className={styles.iconContainer}>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} color="blue" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
