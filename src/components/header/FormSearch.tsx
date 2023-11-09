import React from 'react';
import styles from './header.module.css';
import { FormSearchProps } from '../../types/types';

export function FormSearch({
  searchValue,
  handlerSearch,
  handlerChange,
}: FormSearchProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handlerSearch();
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handlerChange(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        onChange={handleChangeInput}
        value={searchValue}
      />
      <button className={styles.btn} type="submit">
        Search
      </button>
    </form>
  );
}
