import React from 'react';
import styles from './card.module.css';
import { CardData } from '../../types/types';

export class Card extends React.Component<CardData> {
  // constructor(props: CardData) {
  //   super(props);
  //   console.log(props);
  // }
  render() {
    return (
      <div className={styles.card}>
        <p>Name: {this.props.data.name}</p>
        <p>Climate: {this.props.data.climate}</p>
        <p>Terrain: {this.props.data.terrain}</p>
        <p>Diameter: {this.props.data.diameter}</p>
        <p>Cars test</p>
      </div>
    );
  }
}
