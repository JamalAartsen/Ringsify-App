import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import NoImage from "../images/no-image.png";
import SearchBar from "./Searchbar";
import RingLoading from "./RingLoading";
import Error from "./Error";

function CharacterPage() {

    const [characters, setCharacters] = useState([{
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
    }]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        error: false,
        message: null
    });
    const [empty, setEmpty] = useState({
        emptyList: true,
        message: null
    });


    const [display, setDisplay] = useState("");
    const [searchInput, setSearchInput] = useState("");

    function updateSearchInput(value) {
        setSearchInput(value);
    }

    useEffect(() => {
        setLoading(true);
        const url = "https://ringsify-api-v1.herokuapp.com/characters";
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
                    setCharacters(data.results);
                    setError(false);
                    setLoading(false);
                    setDisplay("");
                    if (Object.keys(data.results).length === 0) {
                        setEmpty({ emptyList: true, message: "There are no characters." })
                    } else {
                        setEmpty({ emptyList: false, message: null })
                    }
                })
                .catch(error => {
                    setLoading(false);
                    setError({ error: true, message: "Can't load characters" });
                    setDisplay("none")
                });
        }
        fetchData();
    }, []);

    return (
        <div className="character-page">
            <h1 className="title-character-page">All characters</h1>
            <p className="sub-text-character-page">Below are all the characters from lord of the rings that we currently have in the database.</p>
            <SearchBar input={searchInput} update={updateSearchInput} />

            {error.error && (<Error message={error.message} />)}
            {empty.emptyList && <div className="empty-div">{empty.message}</div>}

            {loading ? (<RingLoading />) :
                <Container style={{ "display": display }} className="character-container" fluid>
                    <Row className="rows" lg={3} md={2} sm={1} xs={1}>
                        {characters.filter((value) => {
                            if (searchInput === "") {
                                return value;
                            } else if (value.name.toLowerCase().includes(searchInput.toLocaleLowerCase())) {
                                return value;
                            }
                        }).map((characterItem, index) => {
                            return (
                                <Col key={index} className="columns"><CharacterCard id={characterItem._id} image={characterItem.imageUrl !== "" ? characterItem.imageUrl : (NoImage)} name={characterItem.name} race={characterItem.race} /></Col>
                            );
                        })}
                    </Row>
                </Container>}
        </div>
    );
}

export default CharacterPage;