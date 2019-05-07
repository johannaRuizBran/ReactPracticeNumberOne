import React from 'react';
import '../style/style.css';

const character = (props) => {
    return (
        <div className="character" onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default character;