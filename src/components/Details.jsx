import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import NoImage from "../images/no-image.png";
import PopUpDelete from './PopUpDelete';
import CharacterInfo from './CharacterInfo';
import PopUpText from './PopUpText';
import RingLoading from './RingLoading';
import Error from './Error';

function Details() {
    const { id } = useParams();
    const history = useHistory();
    const [character, setCharacter] = useState({
        "_id": null,
        "name": null,
        "imageUrl": null,
        "description": null,
        "race": null,
        "birth": null,
        "death": null,
        "realm": null,
        "culture": null,
        "fandomUrl": null
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        error: false,
        message: null
    });
    const [buttonPopUpDelete, setButtonPopUpDelete] = useState(false);
    const [display, setDisplay] = useState("");

    useEffect(() => {
        setLoading(true);
        const url = "https://ringsify-api-v1.herokuapp.com/characters/" + id;
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const fetchData = async () => {
            return await fetch(url, requestOptions)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }

                    throw response
                })
                .then(data => {
                    setError(false);
                    setLoading(false);
                    setCharacter(data)
                    setDisplay("");
                })
                .catch(error => {
                    setLoading(false);
                    setError({ error: true, message: "Can't load character details" });
                    setDisplay("none");
                });
        }
        fetchData();
    }, []);

    return (
        <div className="details-page">
            {error.error && (<Error message={error.message} />)}

            {loading ? (<RingLoading />) :

                (<div style={{ "display": display }}><Container fluid>
                    <Row>
                        <Col className="columns" lg={3} md={4} sm={5}  > <img className="details-img" src={character.imageUrl !== "" ? character.imageUrl : (NoImage)} alt="character-img" /></Col>
                    </Row>
                    <Row>
                        <Col className="columns name-character-details">  <h1>{character.name}</h1></Col>
                    </Row>
                    <Row>
                        <Col className="columns"><p>{character.description}</p></Col>
                    </Row>
                    <Row>
                        <Col className="columns info" lg={9} md={8} sm={7} >
                            <CharacterInfo
                                race={character.race}
                                birth={character.birth}
                                death={character.death}
                                realm={character.realm}
                                culture={character.culture}
                            />
                        </Col>
                    </Row>
                </Container>
                    <Button onClick={() => { window.open(character.fandomUrl, "_blank") }} className="btn-custom" variant="custom">Fandom URL</Button>
                    <Button onClick={() => {
                        history.push({
                            pathname: "/edit/" + id,
                            state: { characterInfoDetails: character }
                        });
                    }} className="btn-custom" variant="custom">Edit</Button>
                    <Button onClick={() => setButtonPopUpDelete(true)} className="btn-delete-character" variant="danger">Delete</Button>
                    <PopUpDelete idCharacter={character._id} trigger={buttonPopUpDelete} setTrigger={setButtonPopUpDelete}>
                        <PopUpText title="Delete character" text="Are you sure you want to delete this character?" />
                    </PopUpDelete>
                </div>)}
        </div>
    );
}

export default Details;
