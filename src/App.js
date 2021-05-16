import React, { useState } from 'react';
import Nav from './components/Nav.js';
import Section from './components/Section.js';
import { Link } from 'react-router-dom';
import './components/Footer.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    const [whatPage,setWhatPage] = useState('main');

    const changePage = (page,e) => {
      // e.preventDefault();
      setWhatPage(page);
    }

    return (
      <React.Fragment>
        <Nav onChangePage={(page)=>{
          {changePage(page)}
        }}> </Nav>
        <Section page={whatPage}> </Section>;
        <Footer> </Footer>
      </React.Fragment>
    );
}
export default App;

const Footer = (props) => {
  return (
    <footer class="footer_container">
      바닥
    </footer>
  );
}
