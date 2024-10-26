import React from "react";
import styles from "./CardCestaBasica.module.css";
import capaImg from "../../../img/doacao-de-alimentos.png";
const CardCestaBasica = ({
  genero,
  artista,
  nomeMusica,
  imagemSrc,
}) => {
  return (
    <div className={styles["card-musica"]}>
      <div className={styles["imagem-container"]}>
        <img
          src={imagemSrc ? imagemSrc : capaImg}
          alt="Imagem"
          className={styles["imagem"]}
        />
      </div>
      <div className={styles["textos"]}>
        <div className={styles["boxTitulo"]}>
          <span><p>Quantidade:{artista+" Und" || "N/A"}{" "}</p></span> 
        </div>
      </div>
      <div className={styles["botoes"]}>
        <button className={styles["botao"]}>Montar Cesta</button>
      </div>
    </div>
  );
};
export default CardCestaBasica;
