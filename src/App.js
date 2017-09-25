import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Initial data'
    }

    this.updateState = this.updateState.bind(this);
  };

  updateState() {
    this.setState({data: 'Data updated ...'})
  }

  render() {
    return (
      <div>
        <button onClick={this.updateState}>CLICK</button>
        <h4>{this.state.data}</h4>
      </div>   
    );
  }
}

export default App;
