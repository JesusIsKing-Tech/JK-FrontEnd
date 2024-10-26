import React, { useState } from "react"; // Importar useState
import styles from "./Adicionar.module.css";
import mais from "../../../img/mais.png";

const Adicionar = ({onClick}) => {
  return (
    <div className={styles["card-musica"]}>
      <div className={styles["imagem-container"]} onClick={onClick}>
        <img src={mais} alt="Adicionar" className={styles["imagem"]} onClick={onClick} />
      </div>
    
    </div>
  );
};

export default Adicionar;
