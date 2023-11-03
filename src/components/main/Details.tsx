import styles from './card.module.css';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Details() {
  const [searchParams] = useSearchParams();
  const [planet, setPlanet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const details = searchParams.get('details') as string;
  console.log(planet);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://swapi.dev/api/planets/?search=${details}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlanet(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [isLoading, details]);

  return <div className={styles.card}>Details</div>;
}
