import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const MainHeader = () =>
{
    return (
        <header>
            <Container fluid>
            <Navbar  
                collapseOnSelect 
                expand="lg"
                variant="dark"
            >
                <Navbar.Brand 
                    href="#home"
                >
                    AnticipadApp
                </Navbar.Brand>

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
                
                    <Nav.Link href="#about">Quiénes somos</Nav.Link>
                    <Nav.Link href="#create">Crear un evento</Nav.Link>
                    <Nav.Link href="#login">Iniciar Sesión</Nav.Link>
                    <Nav.Link href="#register">Registrarse</Nav.Link>

                    <NavDropdown
                        title="Ayuda"
                        bg="dark"
                        className="collasible-nav-dropdown"
                        drop="down-start"
                    >
                        <NavDropdown.Item href="#action/3.1" >
                            Cómo comprar
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.2">
                            Métodos de pago
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item href="#action/3.4">
                            Encuentra tu Ticket
                        </NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </header>
    );
};