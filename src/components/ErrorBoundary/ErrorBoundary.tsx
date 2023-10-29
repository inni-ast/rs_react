import React from 'react';
import stylesBtn from './../header/header.module.css';
import styles from './errorBtn.module.css';
import { Props, ErrorBoundaryState } from '../../types/types';

export class ErrorBoundary extends React.Component<Props, ErrorBoundaryState> {
  constructor(props: Props) {
    super(props);
    this.state = { isError: false };
  }
  static getDerivedStateFromError() {
    return { isError: true };
  }
  render() {
    if (this.state.isError) {
      return (
        <div className={styles.error}>
          <h2>Something went wrong...</h2>
          <button
            className={stylesBtn.btn}
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
