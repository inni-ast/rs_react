import { NavLink, useSearchParams } from 'react-router-dom';
import styles from './nav.module.css';
import './../../App.css';
import { NavProps } from '../../types/types';

export function Nav({ count, value, isPagination }: NavProps) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') as string;

  const links = Array.from({ length: count }).map((el, i) => (
    <li key={i}>
      <NavLink
        key={i}
        to={`?search=${value}&page=${i + 1}`}
        className={styles.link}
        style={({ isActive }) => ({
          color: isActive && +page === i + 1 ? 'goldenrod' : 'aliceblue',
        })}
      >
        {`Page ${i + 1}`}
      </NavLink>
    </li>
  ));
  return <nav className={styles.nav}>{isPagination ? links : ''}</nav>;
}
