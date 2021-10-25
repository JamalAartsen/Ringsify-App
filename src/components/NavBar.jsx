import { Navbar, Nav, Container } from "react-bootstrap";
import Ring from "../images/gold-ring.svg"

function NavBar() {
    return (
        <div className="navbar-container">
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
                <Container>
                    <Navbar.Brand className="navbar-brand" href="/"><img className="gold-ring-img" src={Ring} alt="gold-ring-img" />Ringsify</Navbar.Brand>
                    <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="nav-link nav-link-select" href="/">Home</Nav.Link>
                            <Nav.Link className="nav-link nav-link-select" href="/add">Add characters</Nav.Link>
                            <Nav.Link className="nav-link nav-link-select" href="/characters">Characters</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>);
}

export default NavBar;