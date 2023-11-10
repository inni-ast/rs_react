import styles from './header.module.css';
import { FormSearch } from './FormSearch';

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Planets</h1>
      <FormSearch />
    </header>
  );
}
