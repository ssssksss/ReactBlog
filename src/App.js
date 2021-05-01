// import logo from './logo.svg';
import { Component } from 'react';
//import 클래스컴포넌트 from "클래스컴포넌트의 경로"
import Nav1 from "./components/Nav1"; 
import './App.css';

class App extends Component {
  render() {
    return (
      <header> 
        <Nav1 title="test1" sub="hahaha" > </Nav1>
      </header>
    );
  }
}

export default App;
