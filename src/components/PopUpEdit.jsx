import React from "react";
import { useHistory } from "react-router";

function PopUpEdit(props) {

    const history = useHistory();

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => {
                    props.setTrigger(false)
                    history.replace("/details/" + props.idCharacter)
                }}>X</button>
                {props.children}
            </div>
        </div>) : "";
}

export default PopUpEdit;