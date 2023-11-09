import styles from './card.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Data } from '../../types/types';

export function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const [planet, setPlanet] = useState<Data>();

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${location.pathname[1]}`)
      .then((response) => response.json())
      .then((data) => {
        setPlanet(data);
      })
      .catch((error) => console.log(error));
  }, [location.pathname]);

  return (
    <>
      <div className={styles.modal} onClick={() => navigate(-1)} />
      <div className={`${styles.card} ${styles.details}`}>
        <button className={styles.image} onClick={() => navigate(-1)}>
          <img className={styles.img} src="/close.png" alt="close button" />
        </button>
        <p>
          Name: <span style={{ color: 'saddlebrown' }}>{planet?.name}</span>
        </p>
        <p>Climate: {planet?.climate}</p>
        <p>Terrain: {planet?.terrain}</p>
        <p>Diameter: {planet?.diameter}</p>
        <p>Gravity: {planet?.gravity}</p>
        <p>Surface water: {planet?.surface_water}</p>
      </div>
    </>
  );
}
