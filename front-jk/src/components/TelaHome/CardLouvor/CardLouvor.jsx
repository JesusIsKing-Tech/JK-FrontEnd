import React from "react";
import styles from "./CardLouvor.module.css";
const CardCestaBasica = ({
linkVideo
}) => {
  return (
    <div className={styles["card-musica"]}>
      <div className={styles["imagem-container"]}>
      <iframe width="100%" height="100%" src={linkVideo} title="Criando um visualizador de Links com REACT (tutorial em português react js)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
};
export default CardCestaBasica;
