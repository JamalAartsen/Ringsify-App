import React from "react";

function InputArea(props) {

    function handleChange(event) {
        const name = event.target.value;
        props.change(name)
    }

    return (<div>
        <label className="label">{props.name}</label>
        <textarea
            onChange={handleChange}
            className="input-character"
            type={props.type}
            placeholder={props.placeholder}
            value={props.value} />
    </div>);
}

export default InputArea;