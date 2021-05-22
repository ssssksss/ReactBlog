import React, { useState } from 'react';
import Nav1 from './components/Navigation/Nav1.js';
import './App.css';

const App = () => {
    const [whatPage,setWhatPage] = useState('main');

    const changePage = (page,e) => {
      setWhatPage(page);
    }

    return (
      <React.Fragment>
        <Nav1 onChangePage={(page)=>{{changePage(page)}}}>  </Nav1>
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