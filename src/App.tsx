import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { AppProps } from './types/types';
import { Error } from './components/ErrorBoundary/Error';
import { Nav } from './components/Nav/Nav';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { Planets } from './components/main/Planets';

export function App({}: AppProps) {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isPlanet, setIsPlanet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPagination, setIsPagination] = useState(false);
  const [isError, setIsError] = useState(false);
  const [count, setCount] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const value = localStorage.getItem('value');

    if (value && isSearch) {
      setIsPagination(false);
      setSearchValue(value);
      setIsLoading(true);
      setData([]);
      setIsPlanet(false);
      fetch(`https://swapi.dev/api/planets/?${searchParams}`)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setIsSearch(false);
          setCount(Math.ceil(data.count / 10));
          setData(data.results);
          data.results.length === 0 ? setIsPlanet(true) : setIsPlanet(false);
          setIsPagination(true);
        })
        .catch((error) => console.log(error));
    } else {
      setIsLoading(true);
      setData([]);
      fetch(`https://swapi.dev/api/planets/?${searchParams}`)
        .then((response) => response.json())
        .then((data) => {
          setCount(Math.ceil(data.count / 10));
          setIsLoading(false);
          setData(data.results);
          setIsPagination(true);
        })
        .catch((error) => console.log(error));
    }
  }, [searchParams, isSearch, isPagination]);

  const handlerSearch = () => {
    setIsSearch(true);
    setIsLoading(true);
    setIsPagination(false);
    setData([]);
    setIsPlanet(false);
    setIsSearch(true);
    setSearchParams({ search: searchValue, page: '1' });
  };
  const handlerChange = (value: string) => {
    setIsSearch(false);
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
        <Nav count={count} value={searchValue} isPagination={isPagination} />
        <Routes>
          <Route
            path="/"
            element={
              <Planets isLoading={isLoading} data={data} isPlanet={isPlanet} />
            }
          ></Route>
          <Route
            path="/:page"
            element={
              <Planets isLoading={isLoading} data={data} isPlanet={isPlanet} />
            }
          ></Route>
        </Routes>
        <button className="btn btn-error" onClick={() => setIsError(true)}>
          Get error
        </button>
        {isError && <Error />}
      </main>
    </div>
  );
}
