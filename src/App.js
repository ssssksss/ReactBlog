import React, { useState } from 'react';
import Nav from './components/Nav.js';
import Section from './components/Section.js';
import Footer from './components/Footer.js';
import './App.css';

const App = () => {
    const [whatPage,setWhatPage] = useState('main');

    const changePage = (page,e) => {
      setWhatPage(page);
    }

    return (
      <React.Fragment>
        <Nav onChangePage={(page)=>{{changePage(page)}}}> </Nav>
        <Section page={whatPage}> </Section>;
        <Footer> </Footer>
      </React.Fragment>
    );
}

export default App;



