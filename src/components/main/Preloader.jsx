import React from 'react';
import styles from './card.module.css';

export class Preloader extends React.Component {
  render() {
    return <div className={styles.preloader}>Wait</div>;
  }
}
