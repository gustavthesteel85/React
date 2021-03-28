import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface CountProps {
  count: number;
}

class App extends React.Component<CountProps> {
  constructor(props: CountProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  return: (
    <div>
      <p>{this.state.count}回クリックしました。</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        クリックしてください。
      </button>
    </div>
  );
}

export default App;
