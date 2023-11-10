export type ContextType = {
  searchValue: string;
  handlerSearchValue: (value: string) => void;
  isSearch: boolean;
  handlerIsSearch: (value: boolean) => void;
  handlerChange: (value: string) => void;
  isPlanet: boolean;
  handlerIsPlanet: (value: boolean) => void;
  isLoading: boolean;
  handlerIsLoading: (value: boolean) => void;
  handlerSearch: () => void;
  count: number;
  data: Array<Data> | [];
};

export type AppState = {
  data: Array<Data> | null;
  searchValue: string;
  isPlanet: boolean;
  isLoading: boolean;
  isError: boolean;
};
export interface Data {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: Array<string>;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
}
export interface CardData {
  data: Data;
}
export type AppProps = {
  title?: string;
};

export type Props = {
  children?: React.ReactNode;
};
export type ErrorBoundaryState = {
  isError: boolean;
};
