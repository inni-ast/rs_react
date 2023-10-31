import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Card } from './components/main/Card';
import { AppProps } from './types/types';
import { NoResults } from './components/main/NoResults';
import { Spinner } from './components/main/Spinner';
import { Error } from './components/ErrorBoundary/Error';
import { Nav } from './components/Nav/Nav';

export function App({}: AppProps) {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isPlanet, setIsPlanet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const value = localStorage.getItem('value');

    if (value) {
      setSearchValue(value);
      getPlanets(value);
    } else {
      fetch(`https://swapi.dev/api/planets/?page=2`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCount(Math.ceil(data.count / 10));
          setIsLoading(false);
          setData(data.results);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const getPlanets = (value: string) => {
    fetch(`https://swapi.dev/api/planets/?search=${value}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data.results);
        data.results.length === 0 ? setIsPlanet(true) : setIsPlanet(false);
      })
      .catch((error) => console.log(error));
  };
  const handlerSearch = () => {
    setIsLoading(true);
    setData([]);
    setIsPlanet(false);
    getPlanets(searchValue);
  };
  const handlerChange = (value: string) => {
    setSearchValue(value.trim());
    localStorage.setItem('value', value.trim());
  };
  return (
    <div className="wrapper">
      <Header
        searchValue={searchValue}
        handlerChange={handlerChange}
        handlerSearch={handlerSearch}
      />
      <main className="main">
        <Nav count={count} />
        <div className="planets">
          {isLoading && <Spinner />}
          {data.map((el, i) => (
            <Card data={el} key={i}></Card>
          ))}
          {isPlanet && <NoResults />}
        </div>
        <button className="btn btn-error" onClick={() => setIsError(true)}>
          Get error
        </button>
        {isError && <Error />}
      </main>
    </div>
  );
}
