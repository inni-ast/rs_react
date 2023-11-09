import styles from './card.module.css';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Data } from '../../types/types';
import { Spinner } from './Spinner';

export function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const previousLocation = location.state?.previousLocation;
  const [planet, setPlanet] = useState<Data>();
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('page') + ' page onDetails');
  // const page = searchParams.get('page');
  // console.log(searchParams.get('search'));
  // const search = searchParams.get('search');
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://swapi.dev/api/planets/${location.pathname[1]}`
      // `https://swapi.dev/api/planets/${location.pathname[1]}?search=${search}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlanet(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [location.pathname]);

  return (
    <>
      <div
        className={styles.modal}
        onClick={() => navigate(previousLocation || '/')}
      />
      <div className={`${styles.card} ${styles.details}`}>
        {/* {isLoading && <Spinner />} */}
        <button
          className={styles.image}
          onClick={() => navigate(previousLocation || '/')}
        >
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
