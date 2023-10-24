import React from 'react';
import styles from './header.module.css';
import { Search } from './Search';
import { BtnSearch } from './BtnSearch';

export class Header extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Planets</h1>
        <Search />
        <BtnSearch />
      </header>
    );
  }
}
