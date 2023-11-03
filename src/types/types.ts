export type AppState = {
  data: Array<Data> | [];
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
export type HeaderProps = {
  searchValue: string;
  handlerChange: (value: string) => void;
  handlerSearch: () => void;
};
export type FormSearchProps = {
  searchValue: string;
  handlerChange: (value: string) => void;
  handlerSearch: () => void;
};
export type NavProps = {
  count: number;
  value: string;
  isPagination: boolean;
};
