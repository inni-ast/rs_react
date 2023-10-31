import styles from './nav.module.css';
import { Link } from 'react-router-dom';
import { NavProps } from '../../types/types';

export function Nav({ count }: NavProps) {
  const links = Array.from({ length: count }).map((el, i) => (
    <li key={i}>
      <Link key={i} to={`?page=${i + 1}`} className={styles.link}>
        {`Page ${i + 1}`}
      </Link>
    </li>
  ));
  return <nav className={styles.nav}>{links}</nav>;
}
