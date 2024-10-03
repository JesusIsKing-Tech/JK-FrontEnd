import React from "react";
import styles from "./Header.module.css";

const Header = ({imagem}) => {
    return(
<nav>
  <a onClick={() => handleSectionChange('faq')}>Perguntas frequentes</a>
  <a onClick={() => handleSectionChange('values')}>Valores</a>
  <a onClick={() => handleSectionChange('about')}>Sobre nós</a>
  <ButtonsContainer>
    <button className={styles["login"]}>Login</button>
    <button className="signup">Cadastro</button>
  </ButtonsContainer>
</nav>
    );
};
export default Header;