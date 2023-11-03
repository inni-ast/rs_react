import styles from './card.module.css';
import { CardData } from '../../types/types';
import { useSearchParams } from 'react-router-dom';

export function Card({ data, id }: CardData) {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <div className={styles.card}>
      <p>
        Name: <span style={{ color: 'saddlebrown' }}>{data.name}</span>
      </p>
      <p>Climate: {data.climate}</p>
      <p>Terrain: {data.terrain}</p>
      <p>Diameter: {data.diameter}</p>
      <button
        className={`${styles.btn} btn`}
        onClick={() =>
          setSearchParams((params) => {
            params.set('details', id);
            return params;
          })
        }
      >
        Details
      </button>
    </div>
  );
}
