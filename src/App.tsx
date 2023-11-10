import { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { AppProps } from './types/types';
import { Error } from './components/ErrorBoundary/Error';
import { Nav } from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import { Planets } from './components/main/Planets';
import { Details } from './components/main/Details';

export function App({}: AppProps) {
  const [isError, setIsError] = useState(false);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Planets />}>
            <Route path=":id" element={<Details />}></Route>
          </Route>
        </Routes>
        <button className="btn btn-error" onClick={() => setIsError(true)}>
          Get error
        </button>
        {isError && <Error />}
      </main>
    </div>
  );
}
