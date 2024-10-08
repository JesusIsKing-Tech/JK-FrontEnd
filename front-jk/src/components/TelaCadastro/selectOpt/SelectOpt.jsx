import React from 'react';
import styles from './SelectOpt.module.css'; // Supondo que você crie um CSS Module para estilização

const SelectOpt = ({ label, options, onChange, value }) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOpt;
