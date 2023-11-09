import styles from './card.module.css';
import { Card } from './Card';
import { NoResults } from './NoResults';
import { Spinner } from './Spinner';
import { Data } from '../../types/types';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

type PlanetsProps = {
  isLoading: boolean;
  isPlanet: boolean;
  data: Array<Data> | [];
};

export function Planets({ isLoading, data, isPlanet }: PlanetsProps) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '';
  const search = searchParams.get('search') || '';
  return (
    <div className={styles.main}>
      {isLoading && <Spinner />}
      <div className="planets">
        {data.map((el, i) => {
          const id = el.url.split('/')[5];

          return (
            <Link
              className={styles.card}
              to={`/${id}/?search=${search}&page=${page}`}
              key={el.name}
            >
              <Card data={el} key={i}></Card>
            </Link>
          );
        })}

        {isPlanet && <NoResults />}
      </div>
      <Outlet />
    </div>
  );
}
