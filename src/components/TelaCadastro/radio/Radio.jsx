import React from 'react';
import styles from './Radio.module.css';

function CustomRadioButton({ value, checked, onChange }) {
  return (
    <label className={styles.radioLabel}>
      <input type="radio" className={styles.hiddenRadio} value={value} checked={checked} onChange={onChange} />
      <div className={`${styles.customRadio} ${checked ? styles.checked : ''}`}>
        {checked && <div className={styles.innerCircle} />}
      </div>
      {value}
    </label>
  );
}

export default CustomRadioButton;