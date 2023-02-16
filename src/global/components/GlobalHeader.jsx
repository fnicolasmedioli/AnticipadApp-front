import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link as RouterLink, NavLink } from "react-router-dom";


function activeToggler({isActive}) {
    return (isActive) ? " nav-link-active" : "";
}

export const GlobalHeader = () =>
{
    return (
        <header>
            <Container fluid>
                <Navbar  
                    collapseOnSelect 
                    expand="lg"
                    variant="dark"
                    className="px-sm-3 px-xxl-5 py-3"
                >
                    <RouterLink to="/" className="navbar-brand">AnticipadApp</RouterLink>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Form 
                                className="d-flex"
                            >
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar eventos"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button className="navbar-search-button" variant="outline-light">Buscar</Button>
                            </Form>
                        </Nav>    
                        <Nav className="ms-auto" bg="dark">

                            <NavLink to="/create" className={p => "nav-link"+activeToggler(p)}>Crear un evento</NavLink>
                            <NavLink to="/login" className={p => "nav-link"+activeToggler(p)}>Iniciar Sesión</NavLink>
                            <NavLink to="/signup" className={p => "nav-link"+activeToggler(p)}>Registrarse</NavLink>

                            <NavDropdown
                                title="Ayuda"
                                bg="dark"
                                className="collasible-nav-dropdown"
                                drop="down-start"
                            >

                                <NavLink to="/preguntas-frecuentes" className={p => "dropdown-item"+activeToggler(p)} data-rr-ui-dropdown-item>
                                    Preguntas frecuentes
                                </NavLink>

                                <NavLink to="/como-comprar" className={p => "dropdown-item"+activeToggler(p)} data-rr-ui-dropdown-item>
                                    Cómo comprar
                                </NavLink>

                                <NavLink to="/metodos-de-pago" className={p => "dropdown-item"+activeToggler(p)} data-rr-ui-dropdown-item>
                                    Métodos de pago
                                </NavLink>

                                <NavDropdown.Divider />

                                <NavLink to="/encuentra-tu-ticket" className={p => "dropdown-item"+activeToggler(p)} data-rr-ui-dropdown-item>
                                    Encuentra tu Ticket
                                </NavLink>

                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};