import React, { useState,useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Nav.css';
import Sidemenulist from './Sidemenulist';

const Nav = (props) => {
    return(
        <nav> 
            <div className="nav_container">
                <input type="checkbox" id="menuicon"/>
                <label htmlFor="menuicon">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
                <div className="side_menu_container">
                    <Sidemenulist onChangePage={(page)=>{
                        props.onChangePage(page);
                    }} >
                    </Sidemenulist>
                </div>
            </div>
        </nav>
    );
  }

export default Nav;