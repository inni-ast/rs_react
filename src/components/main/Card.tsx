import { CardData } from '../../types/types';

export function Card({ data }: CardData) {
  return (
    <>
      <p>
        Name: <span style={{ color: 'saddlebrown' }}>{data.name}</span>
      </p>
      <p>Climate: {data.climate}</p>
      <p>Terrain: {data.terrain}</p>
    </>
  );
}
