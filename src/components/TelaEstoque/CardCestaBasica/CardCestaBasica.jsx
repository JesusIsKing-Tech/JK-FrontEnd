import React from "react";
import styles from "./CardCestaBasica.module.css";
// import capaImg from "../../../img/cestaBasica.png";
const CardCestaBasica = ({
  genero,
  artista,
  nomeMusica,
  imagemSrc,
  onClick,
  quantidade
}) => {
  return (
    <div className={styles["card-musica"]}>
      {/* <div className={styles["imagem-container"]}>
        <img
          src={capaImg}
          alt="Cesta Básica"
          className={styles["imagem"]}
        />
      </div> */}
      <div className={styles["textos"]}>
        <div className={styles["boxTitulo"]}>
          <span><b><p>Quantidade:{quantidade || "N/A"}</p></b></span> 
        </div>
      </div>
      <div className={styles["botoes"]}>
        <button className={styles["botao"]} onClick={onClick} >Montar Cesta</button>
      </div>
    </div>
  );
};
export default CardCestaBasica;
