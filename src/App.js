import React, { useState } from 'react';
import Nav from './components/Nav.js';
import Section from './components/Section.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import './App.css';

const App = () => {
    const [whatPage,setWhatPage] = useState('main');

    const changePage = (page,e) => {
      setWhatPage(page);
    }

    return (
      <React.Fragment>
        <div className="body_container">
          <a name="_top"> </a>
          <Nav className="Nav_container" onChangePage={(page)=>{{changePage(page)}}}> </Nav>
          {whatPage==='main'?<HomePage></HomePage>:<Section page={whatPage}> </Section>}
          <Footer> </Footer>
        </div>
        <a href="#_top" className="top">
            맨 위로
        </a>
      </React.Fragment>
    );
}

export default App;



