import React from 'react';
import styles from './header.module.css';

type FormSearchProps = {
  searchValue: string;
  handlerChange: (value: string) => void;
  handlerSearch: () => void;
};
export class FormSearch extends React.Component<FormSearchProps> {
  // constructor() {
  //   super();
  // }
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.handlerSearch();
  };
  handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.handlerChange(event.target.value);
  };
  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          onChange={this.handleChangeInput}
          value={this.props.searchValue}
        />
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
    );
  }
}
