import React, { useState,useEffect } from 'react';
import {CSSTransition } from 'react-transition-group';
import './Nav.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Nav = (props) => {

    return(
        <nav> 
            <div className="nav_container">
                <input type="checkbox" id="menuicon"/>
                <label htmlFor="menuicon" className="nav_menu_container">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
                <div className="side_menu_container">
                    <Sidemenulist onChangePage={()=>{
                      console.log("여기까지도 반응이 온다.");
                        props.onChangePage();
                    }} >
                    </Sidemenulist>
                </div>
            </div>
        </nav>
    );
  }
  
  function Sidemenulist(props) {
    const [activeMenu,setActiveMenu] = useState('main');
    
    function test() {
      props.onChangePage();
    };

    function Sidemenu(props) {
      return(
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
         <div className="each_menu_container">
          {props.children}
         </div>
        </a>
      );
    }
  
    return (
      <div className="side_menu_list">
          
          {/* 첫번째 메뉴 */}
  
          <CSSTransition             
              in={activeMenu === 'main'}
              timeout={500}
              classNames="menu-first"
              unmountOnExit
              onEnter={()=>setActiveMenu('main')}>
              <div className="menu menu1">
                <Sidemenu> 메인 메뉴 </Sidemenu>
                <Sidemenu goToMenu="frontendmenu"> 프론트엔드  </Sidemenu>
                <Sidemenu goToMenu="backendmenu"> 백엔드 </Sidemenu>
                <Sidemenu goToMenu="designmenu"> 디자인 </Sidemenu>
                <Sidemenu goToMenu="networkmenu">네트워크 및 시스템  </Sidemenu>
                <Sidemenu goToMenu="effcodemenu"> 효율적인코드작성 </Sidemenu>
                <Sidemenu goToMenu="devtoolmenu"> 개발도구 </Sidemenu>
                <Sidemenu goToMenu="makemenu"> 만들어보기</Sidemenu>
              </div>
          </CSSTransition>
  
          {/* 두번째 메뉴 */}
  
          <CSSTransition             
              in={activeMenu === 'frontendmenu'}
              timeout={500}
              classNames="menu-second"
              unmountOnExit
              onEnter={()=>setActiveMenu('frontendmenu')}>
              <div className="menu menu2">
                <Sidemenu goToMenu="main"> 프론트엔드 </Sidemenu>
                <Sidemenu goToMenu="html"> HTML</Sidemenu>
                <Sidemenu goToMenu="css"> CSS </Sidemenu>
                <Sidemenu goToMenu="javascript"> JavaScript </Sidemenu>
                <Sidemenu goToMenu="typescript">TypeScript </Sidemenu>
                <Sidemenu goToMenu="nodejs"> Node.js </Sidemenu>
                <Sidemenu goToMenu="react"> React </Sidemenu>
                {/* <Sidemenu goToMenu="vuejs"> Vue.js </Sidemenu> */}
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
          <CSSTransition             
              in={activeMenu === 'backendmenu'}
              timeout={500}
              classNames="menu-second"
              unmountOnExit
              onEnter={()=>setActiveMenu('backendmenu')}>
              <div className="menu menu2">
                <Sidemenu goToMenu="main"> 백엔드 </Sidemenu>
                <Sidemenu goToMenu="java"> Java</Sidemenu>
                <Sidemenu goToMenu="jsp"> JSP </Sidemenu>
                <Sidemenu goToMenu="php"> PHP </Sidemenu>
                <Sidemenu goToMenu="nodejs"> Node.js </Sidemenu>
                <Sidemenu goToMenu="oracledb">OracleDB </Sidemenu>
                {/* <Sidemenu goToMenu="codemenu"> MongoDB </Sidemenu> */}
                {/* <Sidemenu goToMenu="makemenu"> Mysql </Sidemenu> */}
                {/* <Sidemenu goToMenu="makemenu"> MariaDB </Sidemenu> */}
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
          <CSSTransition             
              in={activeMenu === 'designmenu'}
              timeout={500}
              classNames="menu-second"
              unmountOnExit
              onEnter={()=>setActiveMenu('designmenu')}>
              <div className="menu menu2">
                <Sidemenu goToMenu="main"> 디자인 </Sidemenu>
                <Sidemenu goToMenu="figma"> Figma</Sidemenu>
                <Sidemenu goToMenu="photoshop"> Photoshop </Sidemenu>
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
          <CSSTransition             
              in={activeMenu === 'networkmenu'}
              timeout={500}
              classNames="menu-second"
              unmountOnExit
              onEnter={()=>setActiveMenu('networkmenu')}>
              <div className="menu menu2">
                <Sidemenu goToMenu="main"> 네트워크 및 시스템 </Sidemenu>
                <Sidemenu goToMenu="security"> security </Sidemenu>
                <Sidemenu goToMenu="server"> server,network </Sidemenu>
                <Sidemenu goToMenu="rinux"> rinux </Sidemenu>
                <Sidemenu goToMenu="window"> window </Sidemenu>
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
          <CSSTransition             
              in={activeMenu === 'effcodemenu'}
              timeout={500}
              classNames="menu-second"
              unmountOnExit
              onEnter={()=>setActiveMenu('effcodemenu')}>
              <div className="menu menu2">
                <Sidemenu goToMenu="main"> 효율적인 코드 작성 </Sidemenu>
                <Sidemenu goToMenu="design_pattern"> design pattern </Sidemenu>
                <Sidemenu goToMenu="algorithm"> Algorithm </Sidemenu>
                <Sidemenu goToMenu="data_structure"> Data structure </Sidemenu>
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
          <CSSTransition             
              in={activeMenu === 'devtoolmenu'}
              timeout={500}
              classNames="menu-second"
              unmountOnExit
              onEnter={()=>setActiveMenu('devtoolmenu')}>
              <div className="menu menu2">
                <Sidemenu goToMenu="main"> 개발 도구 </Sidemenu>
                <Sidemenu goToMenu="github"> github </Sidemenu>
                <Sidemenu goToMenu="postman"> postman </Sidemenu>
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
          <CSSTransition             
              in={activeMenu === 'makemenu'}
              timeout={500}
              classNames="menu-second"
              unmountOnExit
              onEnter={()=>setActiveMenu('makemenu')}>
              <div className="menu menu2">
                <Sidemenu goToMenu="main"> 만들어 보기 </Sidemenu>
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
          {/* 세번째 메뉴 - 프론트 엔드 */}
          <CSSTransition             
              in={activeMenu === 'html'}
              timeout={500}
              classNames="menu-third"
              unmountOnExit
              onEnter={()=>setActiveMenu('html')}>
              <div className="menu menu3">
                <Sidemenu goToMenu="frontendmenu"> HTML </Sidemenu>
                <ul>
                  <li><a href="#" onClick={()=>
                    {test()}
                  }>HTML1</a></li>
                  <li><a href="#">HTML2</a></li>
                  <li><a href="#">HTML3</a></li>
                  <li><a href="#">HTML4</a></li>
                </ul>


                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
          <CSSTransition             
              in={activeMenu === 'css'}
              timeout={500}
              classNames="menu-third"
              unmountOnExit
              onEnter={()=>setActiveMenu('css')}>
              <div className="menu menu3">
                <Sidemenu goToMenu="frontendmenu"> CSS </Sidemenu>
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
          <CSSTransition             
              in={activeMenu === 'javascript'}
              timeout={500}
              classNames="menu-third"
              unmountOnExit
              onEnter={()=>setActiveMenu('javascript')}>
              <div className="menu menu3">
                <Sidemenu goToMenu="frontendmenu"> JavaScipt </Sidemenu>
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
          <CSSTransition             
              in={activeMenu === 'typescript'}
              timeout={500}
              classNames="menu-third"
              unmountOnExit
              onEnter={()=>setActiveMenu('typescript')}>
              <div className="menu menu3">
                <Sidemenu goToMenu="frontendmenu"> TypeScript </Sidemenu>
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
  
          <CSSTransition             
              in={activeMenu === 'nodejs'}
              timeout={500}
              classNames="menu-third"
              unmountOnExit
              onEnter={()=>setActiveMenu('nodejs')}>
              <div className="menu menu3">
                <Sidemenu goToMenu="frontendmenu"> Node.js </Sidemenu>
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
  
          <CSSTransition             
              in={activeMenu === 'react'}
              timeout={500}
              classNames="menu-third"
              unmountOnExit
              onEnter={()=>setActiveMenu('react')}>
              <div className="menu menu3">
                <Sidemenu goToMenu="frontendmenu"> React </Sidemenu>
                {/* <Sidemenu goToMenu="">  </Sidemenu> */}
              </div>
          </CSSTransition>
      </div>
    );  
  }

export default Nav;