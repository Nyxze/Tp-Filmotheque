import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function NavbarMain() {

    return (

        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/home"}>Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/list-film"}>Liste des films</Nav.Link>
                            <Nav.Link as={Link} to={"/add-film"}>Ajouter un film</Nav.Link>
                            <Nav.Link as={Link} to={"/style"}>Styles</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>Qui sommes-nous</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )

}


export default NavbarMain;