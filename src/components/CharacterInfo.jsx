import React from 'react'

function CharacterInfo(props) {
    return (
        <div className="character-info">
            <p className="p-details">Race</p>
            <p className="sub-p-details">{props.race}</p>
            <p className="p-details">Birth</p>
            <p className="sub-p-details">{props.birth}</p>
            <p className="p-details">Death</p>
            <p className="sub-p-details">{props.death}</p>
            <p className="p-details">Realm</p>
            <p className="sub-p-details">{props.realm}</p>
            <p className="p-details">Culture</p>
            <p className="sub-p-detail">{props.culture}</p>
        </div>
    );
}

export default CharacterInfo;
