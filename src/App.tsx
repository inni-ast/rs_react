import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Card } from './components/main/Card';
import { AppState, AppProps } from './types/types';
import { NoResults } from './components/main/NoResults';
import { planets } from './const/const';
import { Spinner } from './components/main/Spinner';
import { Error } from './components/ErrorBoundary/Error';
export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      data: [],
      searchValue: '',
      isPlanet: false,
      isLoading: true,
      isError: false,
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
          this.setState({ isLoading: false });
          this.setState({ data: data.results });
        })
        .catch((error) => console.log(error));
    }
  }
  getPlanets(value: string) {
    fetch(`https://swapi.dev/api/planets/?search=${value}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isLoading: false });
        this.setState({ data: data.results });
        data.results.length === 0
          ? this.setState({ isPlanet: true })
          : this.setState({ isPlanet: false });
      })
      .catch((error) => console.log(error));
  }
  handlerSearch() {
    this.setState({ isLoading: true });
    this.setState({ data: [] });
    this.setState({ isPlanet: false });
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
            {this.state.isLoading && <Spinner />}
            {this.state.data.map((el, i) => (
              <Card data={el} key={i}></Card>
            ))}
            {this.state.isPlanet && <NoResults />}
          </div>
          <button
            className="btn btn-error"
            onClick={() => this.setState({ isError: true })}
          >
            Get error
          </button>
          {this.state.isError && <Error />}
        </main>
      </div>
    );
  }
}
