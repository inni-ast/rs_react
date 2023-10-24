import React from 'react';
import styles from './header.module.css';

export class BtnSearch extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <button className={styles.btn} type="submit">
        Search
      </button>
    );
  }
}
