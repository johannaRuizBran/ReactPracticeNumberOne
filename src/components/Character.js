import React from 'react';
import '../style/style.css';

const character = (props) => {
    return (
        <div className="character">
            {props.character}
        </div>
    )
}

export default character;