import React from "react";
import InputCharacter from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import CharacterPage from "./Characters";
import Details from "./Details";
import EditCharacter from "./EditPage";

function App() {
    return (
        <div className="page-container">
            <Router>
                <div className="content-wrap">
                    <React.StrictMode>
                        <NavBar />
                    </React.StrictMode>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/characters">
                            <CharacterPage />
                        </Route>
                        <Route path="/add">
                            <InputCharacter />
                        </Route>
                        <Route path="/details/:id">
                            <Details />
                        </Route>
                        <Route path="/edit/:id">
                            <EditCharacter />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer />
        </div>
    );
}

export default App;