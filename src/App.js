import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '../src/Button'
import Stateless from '../src/Stateless'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0}
  }
  
  _add = () => {
    //alert("hello!")
    const {count} = this.state
    this.setState({count: count+1})
    console.log(count)
  }

  _minus = () => {
    //alert("hello!")
    const {count} = this.state
    this.setState({count: count-1})
    console.log(count)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={() => this._add()} text={'+'}/>
        <Button onClick={() => this._minus()} text={'-'}/>
        <div style={{color: this.state.count % 2 === 0 ? 'red': 'blue', paddingTop: 25, fontSize: 30}}>
          <Stateless count={this.state.count} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
