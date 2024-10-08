import React from 'react';
import styles from './FormContainer.module.css'; 
const FormContainer = ({ children }) => {
    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  };

  export default FormContainer;