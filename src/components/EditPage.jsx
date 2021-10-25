import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Title from "./Title";
import Input from "./Input";
import InputArea from "./InputArea";
import PopUp from "./PopUp";
import LoadingRing from "../images/gold-ring.svg"
import PopUpText from "./PopUpText";
import { useLocation, useParams, useHistory } from "react-router";
import PopUpEdit from "./PopUpEdit";

function EditCharacter() {

    const { id } = useParams();
    const history = useHistory();
    const location = useLocation();
    const characterInfo = location.state.characterInfoDetails
    console.log(location.state.characterInfoDetails.name);

    const [nameCharacter, setName] = useState("");
    const [image, setImage] = useState("");
    const [descriptionCharacter, setDescription] = useState("")
    const [raceCharacter, setRace] = useState("");
    const [birthCharacter, setBirth] = useState("");
    const [deathCharacter, setDeath] = useState("");
    const [realmCharacter, setRealm] = useState("");
    const [cultureCharacter, setCulture] = useState("");
    const [fandom, setFandom] = useState("");

    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [buttonPopUpFailed, setButtonPopUpFailed] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect((character = characterInfo) => {
        setName(character.name);
        setImage(character.imageUrl);
        setDescription(character.description);
        setRace(character.race);
        setBirth(character.birth);
        setDeath(character.death);
        setRealm(character.realm);
        setCulture(character.culture);
        setFandom(character.fandomUrl);
    }, [characterInfo]);

    const character = {
        name: nameCharacter,
        imageUrl: image,
        description: descriptionCharacter,
        race: raceCharacter,
        birth: birthCharacter,
        death: deathCharacter,
        realm: realmCharacter,
        culture: cultureCharacter,
        fandomUrl: fandom
    }

    function handleChangeName(change) {
        setName(change);
    }

    function handleChangeImage(change) {
        setImage(change);
    }

    function handleChangeDescription(change) {
        setDescription(change);
    }

    function handleChangeRace(change) {
        setRace(change);
    }

    function handleChangeBirth(change) {
        setBirth(change);
    }

    function handleChangeDeath(change) {
        setDeath(change);
    }

    function handleChangeRealm(change) {
        setRealm(change);
    }

    function handleChangeCulture(change) {
        setCulture(change);
    }

    function handleChangeFandom(change) {
        setFandom(change);
    }


    function addCharactersToDatabase(event) {

        // Create x-www-form-urlencoded data
        var formBody = [];
        for (var property in character) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(character[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const url = "https://ringsify-api-v1.herokuapp.com/characters/" + id;
        console.log("Character: " + formBody);

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formBody
        };

        setLoading(true);

        fetch(url, requestOptions)
            .then((response) => response.json)
            .then((data) => {
                setLoading(false);
                setButtonPopUp(true)
            })
            .catch((error) => {
                setLoading(false)
                setButtonPopUpFailed(true)
                console.log(error.message);
            });

        event.preventDefault();
    }

    return (<div>
        <form className="character-input-form">
            <Title title="Edit Character" />
            <Input change={handleChangeName} name="Name" type="text" value={nameCharacter} placeholder="Sauron" />
            <Input change={handleChangeImage} name="URL Image" type="text" value={image} placeholder="Example: https://static.wikia.nocookie.net/lotr/images/9/90/Sauron-2.jpg/revision/latest?cb=20110508182634" />
            <InputArea change={handleChangeDescription} name="Description" type="text" value={descriptionCharacter} placeholder="Sauron is coming from Mordor..." />
            <Input change={handleChangeRace} name="Race" type="text" value={raceCharacter} placeholder="Maiar" />
            <Input change={handleChangeBirth} name="Birth" type="text" value={birthCharacter} placeholder="Before the shaping of Arda" />
            <Input change={handleChangeDeath} name="Death" type="text" value={deathCharacter} placeholder="25 March, 3019" />
            <Input change={handleChangeRealm} name="Realm" type="text" value={realmCharacter} placeholder="Mordor" />
            <Input change={handleChangeCulture} name="Culture" type="text" value={cultureCharacter} placeholder="Maia of Melkor" />
            <Input change={handleChangeFandom} name="Fandom URL" type="text" value={fandom} placeholder="Example: https://lotr.fandom.com/wiki/Sauron" />
            <Button disabled={loading} onClick={addCharactersToDatabase} className="btn-custom" variant="custom" type="submit">
                {loading ? (<div><img className="loading-animation-form" src={LoadingRing} alt="Loading-img" /></div>) : "Edit"}
            </Button>
        </form>
        <PopUpEdit idCharacter={id} trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <PopUpText title="Character Change" text="Character is change in the database!" />
        </PopUpEdit>
        <PopUp trigger={buttonPopUpFailed} setTrigger={setButtonPopUpFailed}>
            <PopUpText title="Failed" text="Failed to edit character to the database" />
        </PopUp>
    </div>

    );
}

export default EditCharacter;