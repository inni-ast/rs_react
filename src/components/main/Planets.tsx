import { Card } from './Card';
import { NoResults } from './NoResults';
import { Spinner } from './Spinner';
import { Data } from '../../types/types';
import { Outlet } from 'react-router-dom';

type PlanetsProps = {
  isLoading: boolean;
  isPlanet: boolean;
  data: Array<Data> | [];
};

export function Planets({ isLoading, data, isPlanet }: PlanetsProps) {
  return (
    <>
      {isLoading && <Spinner />}
      <div className="planets">
        {data.map((el, i) => (
          <Card data={el} key={i} id={el.name}></Card>
        ))}
        <Outlet />
        {isPlanet && <NoResults />}
      </div>
    </>
  );
}
