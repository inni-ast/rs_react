import React, { useContext } from 'react';
import styles from './header.module.css';
import { Context } from '../../context/context';

export function FormSearch() {
  const { searchValue, handlerChange, handlerSearch } = useContext(Context);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handlerSearch();
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
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
