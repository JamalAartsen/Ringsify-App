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
                <h3>{props.name}</h3>
                <p>{props.race}</p>
            </div>
            <div className="card-image-container">
                <img className="card-img-character" src={props.image} alt="character-img" />
            </div>
        </div>
    );
}

export default CharacterCard;