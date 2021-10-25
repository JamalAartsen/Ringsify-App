import React from 'react'

function Error(props) {
    return (
        <div className="error-div">
            {props.message}
        </div>
    );
}

export default Error;
