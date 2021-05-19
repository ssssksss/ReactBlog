import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Sidemenulist.css';

function Sidemenulist(props) {
  const [activeMenu,setActiveMenu] = useState('main');
  
function send(page) { props.onChangePage(page); };

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

              <Sidemenu> <a onClick={()=>{ send('main'); }}> 메인 메뉴 </a> </Sidemenu>
              <Sidemenu goToMenu="backendmenu"> 백엔드👉  </Sidemenu>
              <Sidemenu goToMenu="frontendmenu"> 프론트엔드👉  </Sidemenu>
              <Sidemenu goToMenu="designmenu"> 디자인👉 </Sidemenu>
              <Sidemenu goToMenu="networkmenu">네트워크 및 시스템👉  </Sidemenu>
              <Sidemenu goToMenu="effcodemenu"> 효율적인코드작성👉 </Sidemenu>
              <Sidemenu goToMenu="devtoolmenu"> 개발도구👉 </Sidemenu>
              <Sidemenu goToMenu="makemenu"> 만들어보기👉</Sidemenu>
            </div>
        </CSSTransition>

        {/* 두번째 메뉴  ========================================================= */}

        <CSSTransition             
            in={activeMenu === 'frontendmenu'}
            timeout={500}
            classNames="menu-second"
            unmountOnExit
            onEnter={()=>setActiveMenu('frontendmenu')}>

            <div className="menu menu2">
              <Sidemenu goToMenu="main"> 프론트엔드  </Sidemenu>
              <Sidemenu goToMenu="html"> HTML👉</Sidemenu>
              <Sidemenu goToMenu="css"> CSS👉 </Sidemenu>
              <Sidemenu goToMenu="javascript"> JavaScript👉 </Sidemenu>
              <Sidemenu goToMenu="typescript">TypeScript👉 </Sidemenu>
              <Sidemenu goToMenu="nodejs_f"> Node.js👉 </Sidemenu>
              <Sidemenu goToMenu="react"> React👉 </Sidemenu>
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
              <Sidemenu goToMenu="java"> Java👉</Sidemenu>
              <Sidemenu goToMenu="jsp"> JSP👉 </Sidemenu>
              <Sidemenu goToMenu="php"> PHP👉 </Sidemenu>
              <Sidemenu goToMenu="nodejs_b"> Node.js👉 </Sidemenu>
              <Sidemenu goToMenu="oracledb">OracleDB👉 </Sidemenu>
              <Sidemenu goToMenu="mysql">MySQL👉 </Sidemenu>
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
              <Sidemenu goToMenu="figma"> Figma👉</Sidemenu>
              <Sidemenu goToMenu="photoshop"> Photoshop👉 </Sidemenu>
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
              <Sidemenu goToMenu="security"> security👉 </Sidemenu>
              <Sidemenu goToMenu="server"> server,network👉 </Sidemenu>
              <Sidemenu goToMenu="rinux"> rinux👉 </Sidemenu>
              <Sidemenu goToMenu="window"> window👉 </Sidemenu>
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
              <Sidemenu goToMenu="design_pattern"> design pattern👉 </Sidemenu>
              <Sidemenu goToMenu="algorithm"> Algorithm👉 </Sidemenu>
              <Sidemenu goToMenu="data_structure"> Data structure👉 </Sidemenu>
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
              <Sidemenu goToMenu="github"> github👉 </Sidemenu>
              <Sidemenu goToMenu="postman"> postman👉 </Sidemenu>
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

        {/* 세번째 메뉴 - 프론트 엔드 ========================================================= */}

        <CSSTransition             
            in={activeMenu === 'html'}
            timeout={500}
            classNames="menu-third"
            unmountOnExit
            onEnter={()=>setActiveMenu('html')}>

            <div className="menu menu3">
              <Sidemenu goToMenu="frontendmenu"> HTML </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('html1')}}>HTML1👉</a>  </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('html2')}}>HTML2👉</a>  </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('html3')}}>HTML3👉</a>  </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('html4')}}>HTML4👉</a>  </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('html5')}}>HTML5👉</a>  </Sidemenu>
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
            in={activeMenu === 'nodejs_f'}
            timeout={500}
            classNames="menu-third"
            unmountOnExit
            onEnter={()=>setActiveMenu('nodejs_f')}>

            <div className="menu menu3">
              <Sidemenu goToMenu="frontendmenu"> Node.js </Sidemenu>
              <Sidemenu> <a href="#" onClick={()=>{send('nodejs_f1')}}> Node.js1👉 </a>  </Sidemenu>
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
              <Sidemenu> <a href="#" onClick={()=>{send('react1')}}> React1👉 </a>  </Sidemenu>
              {/* <Sidemenu goToMenu="">  </Sidemenu> */}
            </div>

        </CSSTransition>

        {/* 세번째 메뉴 - 백 엔드 ========================================================= */}
        <CSSTransition             
            in={activeMenu === 'java'}
            timeout={500}
            classNames="menu-third"
            unmountOnExit
            onEnter={()=>setActiveMenu('java')}>

            <div className="menu menu3">
              <Sidemenu goToMenu="backendmenu"> Java </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('java1')}}>Java1👉</a>  </Sidemenu>
                {/* <Sidemenu> <a href="#" onClick={()=>{send('jsp2')}}>JSP2</a>  </Sidemenu> */}
              {/* <Sidemenu goToMenu="">  </Sidemenu> */}
            </div>
        </CSSTransition>
        
        <CSSTransition             
            in={activeMenu === 'jsp'}
            timeout={500}
            classNames="menu-third"
            unmountOnExit
            onEnter={()=>setActiveMenu('jsp')}>

            <div className="menu menu3">
              <Sidemenu goToMenu="backendmenu"> JSP </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('jsp1')}}>JSP-MySQL👉</a>  </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('jsp2')}}>JSP-OracleDB👉</a>  </Sidemenu>
              {/* <Sidemenu goToMenu="">  </Sidemenu> */}
            </div>
        </CSSTransition>

        <CSSTransition             
            in={activeMenu === 'php'}
            timeout={500}
            classNames="menu-third"
            unmountOnExit
            onEnter={()=>setActiveMenu('php')}>

            <div className="menu menu3">
              <Sidemenu goToMenu="backendmenu"> PHP </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('php1')}}>PHP1👉</a>  </Sidemenu>
                {/* <Sidemenu> <a href="#" onClick={()=>{send('jsp2')}}>JSP2</a>  </Sidemenu> */}
              {/* <Sidemenu goToMenu="">  </Sidemenu> */}
            </div>
        </CSSTransition>

        <CSSTransition             
            in={activeMenu === 'nodejs_b'}
            timeout={500}
            classNames="menu-third"
            unmountOnExit
            onEnter={()=>setActiveMenu('nodejs_b')}>

            <div className="menu menu3">
              <Sidemenu goToMenu="backendmenu"> Node.js </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('nodejs_b1')}}>Node.js1👉</a>  </Sidemenu>
                {/* <Sidemenu> <a href="#" onClick={()=>{send('jsp2')}}>JSP2</a>  </Sidemenu> */}
              {/* <Sidemenu goToMenu="">  </Sidemenu> */}
            </div>
        </CSSTransition>

        <CSSTransition             
            in={activeMenu === 'oracledb'}
            timeout={500}
            classNames="menu-third"
            unmountOnExit
            onEnter={()=>setActiveMenu('oracledb')}>

            <div className="menu menu3">
              <Sidemenu goToMenu="backendmenu"> OracleDB </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('oracledb1')}}>OracleDB1👉</a>  </Sidemenu>
                {/* <Sidemenu> <a href="#" onClick={()=>{send('jsp2')}}>JSP2</a>  </Sidemenu> */}
            </div>
        </CSSTransition>

        <CSSTransition             
            in={activeMenu === 'mysql'}
            timeout={500}
            classNames="menu-third"
            unmountOnExit
            onEnter={()=>setActiveMenu('mysql')}>

            <div className="menu menu3">
              <Sidemenu goToMenu="backendmenu"> MySQL </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('mysql1')}}>MySQL1👉</a>  </Sidemenu>
                {/* <Sidemenu> <a href="#" onClick={()=>{send('jsp2')}}>JSP2</a>  </Sidemenu> */}
            </div>
        </CSSTransition>
        
        {/* 세번째 메뉴 - 디자인 ========================================================= */}
        <CSSTransition             
            in={activeMenu === 'design'}
            timeout={500}
            classNames="menu-third"
            unmountOnExit
            onEnter={()=>setActiveMenu('design')}>

            <div className="menu menu3">
              <Sidemenu goToMenu="backendmenu"> Network </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('design1')}}>Figma 👉</a>  </Sidemenu>
                {/* <Sidemenu> <a href="#" onClick={()=>{send('jsp2')}}>JSP2</a>  </Sidemenu> */}
            </div>
        </CSSTransition>

        
        {/* 세번째 메뉴 - 네트워크 및 시스템 ========================================================= */}
        <CSSTransition             
            in={activeMenu === 'server'}
            timeout={500}
            classNames="menu-third"
            unmountOnExit
            onEnter={()=>setActiveMenu('server')}>

            <div className="menu menu3">
              <Sidemenu goToMenu="backendmenu"> Network </Sidemenu>
                <Sidemenu> <a href="#" onClick={()=>{send('network1')}}>Network 이론👉</a>  </Sidemenu>
                {/* <Sidemenu> <a href="#" onClick={()=>{send('jsp2')}}>JSP2</a>  </Sidemenu> */}
            </div>
        </CSSTransition>
        
        {/* 세번째 메뉴 - 프론트 엔드 ========================================================= */}
        {/* 세번째 메뉴 - 프론트 엔드 ========================================================= */}
        {/* 세번째 메뉴 - 프론트 엔드 ========================================================= */}
        {/* 세번째 메뉴 - 프론트 엔드 ========================================================= */}
        
    </div>
  );  
}

export default Sidemenulist;