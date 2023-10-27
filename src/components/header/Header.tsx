import React from 'react';
import styles from './header.module.css';
import { FormSearch } from './FormSearch';

type HeaderProps = {
  searchValue: string;
  handlerChange: (value: string) => void;
};
export class Header extends React.Component<HeaderProps> {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Planets</h1>
        <FormSearch
          searchValue={this.props.searchValue}
          handlerChange={this.props.handlerChange}
        />
      </header>
    );
  }
}
