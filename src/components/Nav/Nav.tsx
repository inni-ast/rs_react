import { NavLink, useSearchParams } from 'react-router-dom';
import styles from './nav.module.css';
import './../../App.css';
import { useContext } from 'react';
import { Context } from '../../context/context';

export function Nav() {
  const { searchValue, count } = useContext(Context);
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') as string;

  const links = Array.from({ length: count }).map((el, i) => (
    <li key={i}>
      <NavLink
        key={i}
        to={`?search=${searchValue}&page=${i + 1}`}
        className={styles.link}
        style={({ isActive }) => ({
          color: isActive && +page === i + 1 ? 'goldenrod' : 'aliceblue',
        })}
      >
        {`Page ${i + 1}`}
      </NavLink>
    </li>
  ));
  return <nav className={styles.nav}>{links}</nav>;
}
