import React from 'react'

function PopUpText(props) {
    return (
        <div>
            <h3 className="popup-text">{props.title}</h3>
            <p className="popup-text">{props.text}</p>
        </div>
    );
}

export default PopUpText;
