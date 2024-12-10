import React, { useRef, useState } from 'react';
import styles from "./CardEventos.module.css";
import carrossel1 from '../../img/home1.jpeg';
import carrossel2 from '../../img/home2.jpeg';
import carrossel3 from '../../img/home3.jpeg';
import carrossel4 from '../../img/lateralLogin.jpeg';
import carrossel5 from '../../img/doe.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y,Scrollbar } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function CardEventos() {
    const swiperRef = useRef(null);
    const [ ,setCurrentImage] = useState(0);

    const slides = [
        { id: 1, image: carrossel1, url: 'https://www.instagram.com/p/DCFW_LQP5FU/?igsh=dnFuYnR2amhsNDh5&img_index=1', titulo: 'Banda Templo Soul' },
        { id: 2, image: carrossel2, url: 'https://www.instagram.com/p/C_MAsqZPrFK/?igsh=MWx1bjc0eDl6ZHpmeg==', titulo: 'Banda Ecos' },
        { id: 3, image: carrossel3, url: 'https://www.instagram.com/p/C_OldxKv5c4/?igsh=OWI0NWpoOWU3ZW54', titulo: 'Preletor Vinicius Bala' },
        { id: 4, image: carrossel4, url: 'https://www.instagram.com/p/DCFh2gdPGVv/?igsh=MTNqOHYzcDM0YXV6Mw%3D%3D&img_index=1', titulo: 'Preletor Arthur Ribeiro' },
        { id: 5, image: carrossel5, url: 'https://www.instagram.com/p/C_RKSPXvHar/?igsh=ZHVkZzI3cTBwY2lj', titulo: 'Teatro CIA Nissi' },
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
                    modules={[ A11y, Scrollbar]}
                    spaceBetween={30}
                    slidesPerView={3}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className={styles.slide}>
                            <a href={slide.url}>
                                <img
                                    src={slide.image}
                                    alt={slide.titulo}
                                    className={styles.slideItem}
                                />
                            </a>
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
