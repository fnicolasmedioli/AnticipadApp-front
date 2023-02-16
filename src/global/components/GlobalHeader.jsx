import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link as RouterLink, Route } from "react-router-dom";

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
                        
                            <RouterLink to="/create" className="nav-link">Crear un evento</RouterLink>
                            <RouterLink to="/login" className="nav-link">Iniciar Sesión</RouterLink>
                            <RouterLink to="/signup" className="nav-link">Registrarse</RouterLink>

                            <NavDropdown
                                title="Ayuda"
                                bg="dark"
                                className="collasible-nav-dropdown"
                                drop="down-start"
                            >

                                <RouterLink to="/preguntas-frecuentes" className="dropdown-item" data-rr-ui-dropdown-item>
                                    Preguntas frecuentes
                                </RouterLink>

                                <RouterLink to="/como-comprar" className="dropdown-item" data-rr-ui-dropdown-item>
                                    Cómo comprar
                                </RouterLink>

                                <RouterLink to="/metodos-de-pago" className="dropdown-item" data-rr-ui-dropdown-item>
                                    Métodos de pago
                                </RouterLink>

                                <NavDropdown.Divider />

                                <RouterLink to="/encuentra-tu-ticket" className="dropdown-item" data-rr-ui-dropdown-item>
                                    Encuentra tu Ticket
                                </RouterLink>

                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};