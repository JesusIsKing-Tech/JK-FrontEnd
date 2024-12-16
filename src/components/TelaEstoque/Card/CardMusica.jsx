import React from "react";
import styles from "./CardMusica.module.css";
import capaImg from "../../../img/doacao-de-alimentos.png";

import arroz from "../../../img/Arroz-card.webp";
import feijao from "../../../img/FeijaoCard.jpg";
import macarrao from "../../../img/MacarraoCard.jpg";
import oleo from "../../../img/OleoCard.jpg";
import acucar from "../../../img/AcucarCard.jpeg";
import sal from "../../../img/SalCard.webp";
import farinha from "../../../img/TrigoCard.jpeg";
import leite from "../../../img/leiteCard.webp";
import cafe from "../../../img/CafeCard.jpg";

const CardMusica = ({
  peso,
  quantidade,
  nome,
  imagemSrc,
  onClick
}) => {

  const imageMap = {
    'Arroz': arroz,
    'Feijão': feijao,
    'Macarrão': macarrao,
    'Óleo': oleo,
    'Açucar': acucar,
    'Sal': sal,
    'Farinha': farinha,
    'Leite em pó': leite,
    'Açúcar': acucar,
    'Café': cafe,
  }

  const imagemSrc2 = imageMap[nome];

  return (
    <div className={styles["card-musica"]} onClick={onClick}>
      <div className={styles["imagem-container"]}>
        <img
          src={imagemSrc2 ? imagemSrc2 : capaImg}
          alt="Imagem"
          className={styles["imagem"]}
        />
      </div>
      <div className={styles["textos"]}>
        <div className={styles["boxTitulo"]}>
        <h1>{nome || "N/A"}</h1>
        {/* <p className={styles["circulo"]}></p> */}
        </div>
        <p>
          <span>Quantidade:</span> {quantidade || "N/A"}{" "}
        </p>
        <p>
          <span>Peso total</span>: {peso || "N/A"}{" "}
        </p>
       
      </div>
    </div>
  );
};
export default CardMusica;
