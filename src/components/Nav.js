import React, { useState,useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Nav.css';
import Sidemenulist from './Sidemenulist';

const Nav = (props) => {
    return(
        <nav className="nav_container">
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
        </nav>
    );
  }

export default Nav;