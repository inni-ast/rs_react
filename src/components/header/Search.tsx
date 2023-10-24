import React from 'react';
import styles from './header.module.css';

export class Search extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return <input className={styles.input} type="text" />;
  }
}
