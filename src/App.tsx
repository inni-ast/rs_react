import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Card } from './components/main/Card';
import { Data } from './types/response';

type AppProps = {
  title?: string;
};

type AppState = {
  data: Array<Data> | [];
};
export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('https://swapi.dev/api/planets/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        this.setState({ data: data.results });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main className="main">
          {this.state.data.map((el, i) => (
            <Card data={el} key={i}></Card>
          ))}
        </main>
      </div>
    );
  }
}
