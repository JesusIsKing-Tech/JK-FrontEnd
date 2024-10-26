import React from "react";
import styles from "./CardMusica.module.css";
import capaImg from "../../../img/doacao-de-alimentos.png";
const CardMusica = ({
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
        <h1>{nomeMusica || "N/A"}</h1>
        <p className={styles["circulo"]}></p>
        </div>
        <p>
          <span>Quantidade:</span> {artista || "N/A"}{" "}
        </p>
        <p>
          <span>Peso total</span>: {genero || "N/A"}{" "}
        </p>
       
      </div>
      {/* <div className={styles["botoes"]}>
        <button className={styles["botao"]}>Editar</button>
        <button className={styles["botao"]}>Excluir</button>
      </div> */}
    </div>
  );
};
export default CardMusica;
