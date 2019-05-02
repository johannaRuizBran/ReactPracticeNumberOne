import React, {Component} from 'react';
import '../style/style.css';

class Sidebar extends Component {            
    render(){                
        return (           
            <div className='sidebar'>                    
                <ul>
                    <li>Practice #1</li>
                    <li>Practice #2</li>
                    <li>Practice #3</li>
                </ul>         
            </div>                    
        );
    }
}

export default Sidebar;