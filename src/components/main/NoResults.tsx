import React from 'react';
import style from './card.module.css';

export class NoResults extends React.Component {
  render() {
    return (
      <div className={style.big}>There is no such Planet in Star Wars</div>
    );
  }
}
