import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        Нечего показать <br />
        потому что ошибка
        <br />
      </p>
    </>
  );
};

export default ErrorMessage;
