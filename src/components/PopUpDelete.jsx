import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router";

function PopUpDelete(props) {

    const history = useHistory();

    function deleteCharacter() {
        const id = props.idCharacter;
        const url = "https://ringsify-api-v1.herokuapp.com/characters/" + id;
        const requestOptions = {
            method: 'Delete'
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
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        fetchData();
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
                <Button onClick={() => {
                    deleteCharacter();
                    props.setTrigger(false);
                    history.replace("/characters")
                }} style={{ marginRight: "5px", marginTop: "5px" }} variant="danger">Delete</Button>
                <Button variant="dark" style={{ marginRight: "5px", marginTop: "5px" }} onClick={() => props.setTrigger(false)}>Cancel</Button>
            </div>
        </div>) : "";
}

export default PopUpDelete;
