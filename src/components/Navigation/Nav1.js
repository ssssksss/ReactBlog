import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Nav1.css";
import Side_menu_list from "./Side_menu_list.js";

const Nav = (props) => {
  return (
    <nav className="nav_container">
      <a id="top"> </a>
      <div className="nav_frame">
        <input type="checkbox" id="menuicon" />
        <div className="menuicon_container">
          <label htmlFor="menuicon">
            <span> </span>
            <span> </span>
            <span> </span>
          </label>
        </div>
        <div className="logo_container">
          <div>로고</div>
        </div>
        <div className="nav_menu_container">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="side_menu_container">
          <Side_menu_list
            // App.js(상위) Nav1 onChangePage={(page)=>{{changePage(page)}}}>  </Nav1>
            // 페이지가 변하면 Nav1이 가지고 있는 Property onChangePage함수를 실행시킨다.
            // 여기서 page 매개변수는 Side_menu_list.js(하위)에 있는
            // <Sidemenu> 컴포넌트의 goToMenu 프로퍼티의 value값이다.
            onChangePage={(page) => {
              props.onChangePage(page);
            }}
          ></Side_menu_list>
        </div>
        <a href="#top" className="top">
          top
        </a>
      </div>
    </nav>
  );
};

export default Nav;

{
  /* <nav className="nav_container">
<input type="checkbox" id="menuicon"/>
<div className="menuicon_container">
    <label htmlFor="menuicon">
        <span> </span>
        <span> </span>
        <span> </span>
    </label>
</div>
<div className="logo_container">
    로고
</div>
<div className="nav_menu_container">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</div>
<div className="side_menu_container">
    <Sidemenulist onChangePage={(page)=>{
        props.onChangePage(page);
    }} >
    </Sidemenulist>
</div>
</nav> */
}
