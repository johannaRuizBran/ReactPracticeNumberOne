import React from 'react';
import '../style/style.css';

const Header = (props) => 

<div className="header-element">
    <div className="toggle-btn" onClick={props.sideBarHandler}>
        <span></span>
        <span></span>
        <span></span>        
    </div>
    <p className="title">My first practice in React</p>
</div>

export default Header;