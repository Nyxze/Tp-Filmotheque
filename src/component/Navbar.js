import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown'

function NavbarMain({ loggedIn, setLoggedIn }) {

    console.log(loggedIn);
    const  logout = async () => {
        if (loggedIn) {
            sessionStorage.removeItem("user", null);
            await axios.get('/user/logout')
            setLoggedIn(false);
        } else {
            sessionStorage.setItem("user", true);
            setLoggedIn(true);
        }
    }




function  isAdmin()  {

    let user = JSON.parse(sessionStorage.getItem("user"));
    
    return user; 
}

    return (

        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/home"}>Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/home"}>Acceuil</Nav.Link>
                            <Nav.Link as={Link} to={"/bouquets"}>Bouquets</Nav.Link>
                            <Nav.Link as={Link} to={"/fleurs"}>Fleurs</Nav.Link>
                            <Nav.Link as={Link} to={"/plantes"}>Plantes</Nav.Link>
                            <Nav.Link as={Link} to={"/cart"}>Pannier</Nav.Link>

                            {loggedIn
                                ?
                                <Nav.Link onClick={logout} as={Link} to={"/home"}>Logout</Nav.Link> :
                                <>
                                    <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                                    <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>

                                </>
                            }

                        </Nav>



                            {isAdmin()?
                        <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            Gestion
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={"/gestion/plantes"}>Plantes</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/gestion/fleurs"}>Fleurs</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/gestion/bouquets"}>Bouquets</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as={Link} to={"/gestion/saisons"}>Saisons</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as={Link} to={"/gestion/styles"}>Styles</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>:null}
                      
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )

}


export default NavbarMain;