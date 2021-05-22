import React, { useState,useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Nav1.css';
import Side_menu_list from './Side_menu_list.js';

const Nav = (props) => {
    // onChangePage={(page)=>{{changePage(page)}}} 
    return(
        <nav className="nav_container">
            <div className="nav_frame">
                <input type="checkbox" id="menuicon"/>
                <div className="menuicon_container">
                    <label htmlFor="menuicon">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </label>
                </div>
                <div className="logo_container">
                    <div>
                        로고
                    </div>
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
                    <Side_menu_list onChangePage={(page)=>{props.onChangePage(page);}}> </Side_menu_list>
                </div>
            </div>
        </nav>
    );
  }

export default Nav;

{/* <nav className="nav_container">
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
</nav> */}