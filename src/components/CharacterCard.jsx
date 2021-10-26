import React from "react";
import { useHistory } from "react-router";

function CharacterCard(props) {
    const history = useHistory();

    function clickCard() {
        history.push("/details/" + props.id);
    }

    return (
        <div onClick={clickCard} className="card-character">
            <div className="text-container-character">
                <h3 className="card-character-text">{props.name}</h3>
                <p className="card-character-text">{props.race}</p>
            </div>
            <div className="card-image-container">
                <img className="card-img-character" src={props.image} alt="character-img" />
            </div>
        </div>
    );
}

export default CharacterCard;