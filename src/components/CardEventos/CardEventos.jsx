import React, { useRef } from 'react';
import styles from "./CardEventos.module.css";
import carrossel1 from '../../img/home1.jpeg';
import carrossel2 from '../../img/home2.jpeg';
import carrossel3 from '../../img/home3.jpeg';
import carrossel4 from '../../img/lateralLogin.jpeg';
import carrossel5 from '../../img/doe.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Scrollbar } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function CardEventos() {
    const swiperRef = useRef(null);

    const slides = [
        { id: 1, image: carrossel1, url: 'https://www.instagram.com/p/DCFW_LQP5FU/', titulo: 'Banda Templo Soul', descricao: 'Uma noite especial de música e adoração com Templo Soul.' },
        { id: 2, image: carrossel2, url: 'https://www.instagram.com/p/C_MAsqZPrFK/', titulo: 'Banda Ecos', descricao: 'Participe de um evento incrível com a Banda Ecos.' },
        { id: 3, image: carrossel3, url: 'https://www.instagram.com/p/C_OldxKv5c4/', titulo: 'Preletor Vinicius Bala', descricao: 'Uma palavra inspiradora do preletor Vinicius Bala.' },
        { id: 4, image: carrossel4, url: 'https://www.instagram.com/p/DCFh2gdPGVv/', titulo: 'Preletor Arthur Ribeiro', descricao: 'Venha ouvir uma mensagem impactante com Arthur Ribeiro.' },
        { id: 5, image: carrossel5, url: 'https://www.instagram.com/p/C_RKSPXvHar/', titulo: 'Teatro CIA Nissi', descricao: 'Uma apresentação teatral inesquecível com CIA Nissi.' },
        { id: 6, image: 'https://jesusking.blob.core.windows.net/images/b442eb2c-fabb-43af-8a5b-20d369b2d0f5-mandamentos.jpg', url: '', titulo: 'Banda Templo Soul', descricao: 'Uma noite especial de louvor e música.' },
    ];

    return (
        <div className={styles.boxCarrossel}>
            <button
                onClick={() => swiperRef.current.slidePrev()}
                className={styles.leftArrow}
            >
                <FaChevronLeft size={30} />
            </button>
            <div className={styles.boxEventos}>
                <Swiper
                    modules={[A11y, Scrollbar]}
                    spaceBetween={30}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className={styles.slide}>
                            <div className={styles.card}>
                                {/* <div className={styles.boxImg}> */}
                                <img
                                    src={slide.image}
                                    alt={slide.titulo}
                                    className={styles.cardImage}
                                />
                                {/* </div> */}

                                <div className={styles.cardContent}>
                                    <h3>{slide.titulo}</h3>
                                    <p>{slide.descricao}</p>
                                    {slide.url && (
                                        <a href={slide.url} target="_blank" rel="noopener noreferrer">
                                            <button className={styles.btn}>Conferir</button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button
                onClick={() => swiperRef.current.slideNext()}
                className={styles.rightArrow}
            >
                <FaChevronRight size={30} />
            </button>
        </div>
    );
}

export default CardEventos;
