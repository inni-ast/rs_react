import { ReactNode, createContext, useEffect, useState } from 'react';
import { ContextType } from '../types/types';
import { useSearchParams } from 'react-router-dom';

export const Context = createContext<ContextType>({
  searchValue: '',
  handlerSearchValue: () => {},
  isSearch: false,
  handlerIsSearch: () => {},
  handlerChange: () => {},
  isPlanet: false,
  handlerIsPlanet: () => {},
  isLoading: true,
  handlerIsLoading: () => {},
  handlerSearch: () => {},
  count: 0,
  data: [],
  //handlerData: () => {},
});

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isPlanet, setIsPlanet] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);
  //
  const [searchParams, setSearchParams] = useSearchParams();
  const [count, setCount] = useState(0);
  //
  const handlerSearchValue = (value: string) => {
    setSearchValue(value);
  };
  const handlerIsSearch = (value: boolean) => {
    setIsSearch(value);
  };
  const handlerIsLoading = (value: boolean) => {
    setIsLoading(value);
  };
  const handlerIsPlanet = (value: boolean) => {
    setIsPlanet(value);
  };
  const handlerChange = (value: string) => {
    handlerIsSearch(false);
    handlerSearchValue(value.trim());
    localStorage.setItem('value', value.trim());
  };
  useEffect(() => {
    const value = localStorage.getItem('value');
    if (value && isSearch) {
      handlerSearchValue(value);
      handlerIsLoading(true);
      setData([]);
      handlerIsPlanet(false);
      fetch(`https://swapi.dev/api/planets/?${searchParams}`)
        .then((response) => response.json())
        .then((data) => {
          handlerIsLoading(false);
          handlerIsSearch(false);
          setCount(Math.ceil(data.count / 10));
          setData(data.results);
          data.results.length === 0
            ? handlerIsPlanet(true)
            : handlerIsPlanet(false);
        })
        .catch((error) => console.log(error));
    } else {
      handlerIsLoading(true);
      setData([]);
      fetch(`https://swapi.dev/api/planets/?${searchParams}`)
        .then((response) => response.json())
        .then((data) => {
          handlerIsLoading(false);
          setData(data.results);
          setCount(Math.ceil(data.count / 10));
        })
        .catch((error) => console.log(error));
    }
  }, [searchParams, isSearch, ,]);
  const handlerSearch = () => {
    handlerIsSearch(true);
    handlerIsLoading(true);
    setData([]);
    handlerIsPlanet(false);
    handlerIsSearch(true);
    setSearchParams({ search: searchValue, page: '1' });
  };
  return (
    <Context.Provider
      value={{
        searchValue,
        handlerSearchValue,
        isSearch,
        handlerIsSearch,
        handlerChange,
        isPlanet,
        handlerIsPlanet,
        isLoading,
        handlerIsLoading,
        handlerSearch,
        count,
        data,
      }}
    >
      {children}
    </Context.Provider>
  );
};
