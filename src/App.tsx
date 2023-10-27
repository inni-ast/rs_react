import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Card } from './components/main/Card';
import { AppState } from './types/types';
import { NoResults } from './components/main/NoResults';
import { planets } from './const/const';

type AppProps = {
  title?: string;
};

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      data: [],
      searchValue: '',
      noPlanet: false,
    };
    this.handlerSearch = this.handlerSearch.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }
  componentDidMount() {
    const value = localStorage.getItem('value');

    if (value) {
      this.setState({ searchValue: value });
      this.getPlanets(value);
    } else {
      fetch(`https://swapi.dev/api/planets/`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ data: data.results });
        })
        .catch((error) => console.log(error));
    }
  }
  getPlanets(value: string) {
    fetch(`https://swapi.dev/api/planets/?search=${value}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data.results });
        data.results.length === 0
          ? this.setState({ noPlanet: true })
          : this.setState({ noPlanet: false });
      })
      .catch((error) => console.log(error));
  }
  handlerSearch() {
    this.getPlanets(this.state.searchValue);
  }
  handlerChange(value: string) {
    this.setState({ searchValue: value.trim() });
    localStorage.setItem('value', value);
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          searchValue={this.state.searchValue}
          handlerChange={this.handlerChange}
          handlerSearch={this.handlerSearch}
        />
        <main className="main">
          <h2>The names of planets for search</h2>
          <p>{planets}</p>
          <div className="planets">
            {this.state.data.map((el, i) => (
              <Card data={el} key={i}></Card>
            ))}
            {this.state.noPlanet && <NoResults />}
          </div>
        </main>
      </div>
    );
  }
}
