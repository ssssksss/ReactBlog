import logo from './logo.svg';
import { Component } from 'react';
import Test from "./components/test";
import './App.css';

class App extends Component {
  render() {
    return (
      <header> 
        <Test title="test1" sub="hahaha" > </Test>
        <Test title="test3" sub="ababab" > </Test>
      </header>
    );
  }
}

export default App;
