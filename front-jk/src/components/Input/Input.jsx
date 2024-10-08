import React from 'react';
import styles from './Input.module.css'; 

const Input = ({ label, type, placeholder, children }) => {
  return (
    <div className={styles.boxLabels}>
      <div>{label}</div>
      <input type={type} placeholder={placeholder} className={styles.input} />
      {children}
    </div>
  );
};

export default Input;
