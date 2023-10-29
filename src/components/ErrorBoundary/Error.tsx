import React from 'react';

export class Error extends React.Component {
  render(): React.ReactNode {
    throw new Error('Oops, something went wrong!');
    return <>Error</>;
  }
}
