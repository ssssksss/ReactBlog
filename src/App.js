import React, { useState } from 'react';
import Nav1 from './components/Navigation/Nav1.js';
import './App.css';
import Section1 from './components/Section/Section1.js';
import Section2 from './components/Section/Section2.js';

const App = () => {
    const [whatPage,setWhatPage] = useState('main');

    const changePage = (page,e) => {
      setWhatPage(page);
    }

    return (
      <React.Fragment>
        <div className="App_container">
          <Nav1 onChangePage={(page)=>{{changePage(page)}}}>  </Nav1>
          {whatPage==='main'?<Section1></Section1>:<Section2 page={whatPage}> </Section2>}
        </div>
      </React.Fragment>
    );
}

export default App;



{/* <React.Fragment>
<div className="body_container">
  <a name="_top"> </a>
  <Nav className="Nav_container" onChangePage={(page)=>{{changePage(page)}}}> </Nav>
  {whatPage==='main'?<HomePage></HomePage>:<Section page={whatPage}> </Section>}
  <Footer> </Footer>
</div>
<a href="#_top" className="top">
    맨 위로
</a>
</React.Fragment> */}