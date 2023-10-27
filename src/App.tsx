import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Card } from './components/main/Card';
import { AppState } from './types/types';

type AppProps = {
  title?: string;
};

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      data: [],
      searchValue: '',
    };
    this.handlerSearch = this.handlerSearch.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }
  componentDidMount() {
    const value = localStorage.getItem('value');
    if (value) {
      this.setState({ searchValue: value });
    }

    fetch(`https://swapi.dev/api/planets/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        this.setState({ data: data.results });
      })
      .catch((error) => console.log(error));
  }
  handlerSearch() {
    console.log('search');
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
        />
        <main className="main">
          {this.state.data.map((el, i) => (
            <Card data={el} key={i}></Card>
          ))}
        </main>
      </div>
    );
  }
}
