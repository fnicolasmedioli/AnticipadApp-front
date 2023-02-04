import { Search as SearchIcon } from "react-bootstrap-icons";

export const MainHeader = () =>
{
    return (
        <>        
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TicketZone</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Menu navegacion">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Comprar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Quiénes somos</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ayuda
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="#">Cómo comprar</a></li>
                                <li><a className="dropdown-item" href="#">Métodos de pago</a></li>
                                <li><a className="dropdown-item" href="#">Política de reembolso</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Ingresa tu búsqueda" aria-label="Busqueda" />
                        <button className="btn btn-outline-success" type="submit">
                            <SearchIcon size={20}/>
                        </button>
                    </form>
                    </div>
                </div>
                </nav>
    
            </header>
    
        </>
    );
};