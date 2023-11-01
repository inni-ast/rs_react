import { Card } from './Card';
import { NoResults } from './NoResults';
import { Spinner } from './Spinner';
import { Data } from '../../types/types';

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
          <Card data={el} key={i}></Card>
        ))}
        {isPlanet && <NoResults />}
      </div>
    </>
  );
}
