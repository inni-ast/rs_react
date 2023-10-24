// export interface Response {
//   count: number;
//   next: string;
//   previous: string | null;
//   results: Array<Data>;
// }
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
