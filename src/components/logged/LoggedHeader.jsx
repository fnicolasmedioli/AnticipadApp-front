import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as RouterLink, NavLink } from "react-router-dom";

import { LocationBox } from "..";

function activeToggler({ isActive }) {
    return isActive ? " nav-link-active" : "";
}

export const LoggedHeader = () => {
    return (
        <header>
            <Container fluid>
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    variant="dark"
                    className="px-sm-3 px-xxl-5 py-3"
                >
                    <RouterLink to="/" className="navbar-brand">
                        AnticipadApp
                    </RouterLink>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LocationBox />
                        </Nav>

                        <Nav className="ms-auto right-nav-menu" bg="dark">
                            <NavLink
                                to="/crear-evento"
                                className={p => "nav-link" + activeToggler(p)}
                            >
                                Crear un evento
                            </NavLink>

                            <NavLink
                                to="/mi-cuenta"
                                className={p => "nav-link" + activeToggler(p)}
                            >
                                Mi cuenta
                            </NavLink>

                            <NavLink
                                to="/logout"
                                className={p => "nav-link" + activeToggler(p)}
                            >
                                Cerrar sesión
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};
