import React from 'react';
import styles from './SubTitulo.module.css'; 

const SubTitulo = (texto) => {
  return (
    <p className={styles.subTitulo}>
      {texto}
    </p>
  );
};

export default SubTitulo;