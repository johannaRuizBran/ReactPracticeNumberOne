import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import '../style/style.css';

class Sidebar extends Component {            
    render(){                
        return (
            <div className='sidebar'>                    
                <NavLink to="/" exact>Practice #1</NavLink>
                <NavLink to="/practice2" exact>Practice #2</NavLink>         
            </div>                    
        );
    }
}

export default Sidebar;