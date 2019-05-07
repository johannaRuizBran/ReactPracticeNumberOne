import React from 'react';
import { NavLink } from "react-router-dom";
import '../style/style.css';

const sidebar = () => (
    <div className='sidebar'>                    
        <NavLink to="/" exact>Practice #1</NavLink>
        <NavLink to="/practice2" exact>Practice #2</NavLink>         
    </div>  
);

export default sidebar;