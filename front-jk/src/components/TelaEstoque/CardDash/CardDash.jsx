import React from "react";
import styles from "./CardDash.module.css";
import capaImg from "../../../img/doacao-de-alimentos.png";
const CardDash = ({
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
        <h1>Estoque</h1>
        <p className={styles["circulo"]}></p>
        </div>
        <p>
          <span>Capacidade:</span> {artista+" %" || "N/A"}{" "}
        </p>
        
       
      </div>
      {/* <div className={styles["botoes"]}>
        <button className={styles["botao"]}>Editar</button>
        <button className={styles["botao"]}>Excluir</button>
      </div> */}
    </div>
  );
};
export default CardDash;
