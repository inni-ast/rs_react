import styles from './card.module.css';
import { CardData } from '../../types/types';

export function Details({ data }: CardData) {
  console.log(data);
  return (
    <div className={styles.card}>
      Details
      {/* <p>Name: {data.name}</p>
      <p>Created{data.created}</p>
      <p>Climate: {data.climate}</p>
      <p>Gravity: {data.gravity}</p>
      <p>Terrain: {data.terrain}</p>
      <p>Diameter: {data.diameter}</p>
      <p>Population: {data.population}</p> */}
    </div>
  );
}
