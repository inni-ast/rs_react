import { useSearchParams } from 'react-router-dom';
import styles from './nav.module.css';
import './../../App.css';
import { NavLink as Link } from 'react-router-dom';
import { NavProps } from '../../types/types';

export function Nav({ count, value }: NavProps) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') as string;
  const links = Array.from({ length: count }).map((el, i) => (
    <li key={i}>
      <Link
        key={i}
        to={`?search=${value}&page=${i + 1}`}
        className={`${styles.link} ${+page}===${i + 1}? ${styles.active}:''`}
      >
        {`Page ${i + 1}`}
      </Link>
    </li>
  ));
  return <nav className={styles.nav}>{links}</nav>;
}
