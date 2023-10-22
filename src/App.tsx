import React from 'react';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, world!</p>
        <Text text="text" />
      </div>
    );
  }
}
type PropsText = {
  text: string;
};

class Text extends React.Component<PropsText> {
  constructor(props: PropsText) {
    super(props);
  }
  render() {
    return <>Hello {this.props.text}</>;
  }
}
