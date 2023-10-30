import styles from './card.module.css';
import { CardData } from '../../types/types';

export function Card({ data }: CardData) {
  return (
    <div className={styles.card}>
      <p>Name: {data.name}</p>
      <p>Climate: {data.climate}</p>
      <p>Terrain: {data.terrain}</p>
      <p>Diameter: {data.diameter}</p>
      <p>Cars test</p>
    </div>
  );
}
