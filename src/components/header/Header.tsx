import styles from './header.module.css';
import { FormSearch } from './FormSearch';
import { HeaderProps } from '../../types/types';

export function Header({
  searchValue,
  handlerChange,
  handlerSearch,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Planets</h1>
      <FormSearch
        searchValue={searchValue}
        handlerChange={handlerChange}
        handlerSearch={handlerSearch}
      />
    </header>
  );
}
