import { Link as RouterLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const LoginBox = () => {
    const navigate = useNavigate();

    const onClickBack = e => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <form>
            <div className="form">
                <button className="back-button" onClick={onClickBack}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <h1>Bienvenido!</h1>
                <p>Ingresa para continuar con la compra</p>
                <div className="input">
                    <div className="inputBox">
                        <label htmlFor="email-input">Email</label>
                        <input type="email" id="email-input" />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="password-input">Contraseña</label>
                        <input type="password" id="password-input" />
                    </div>
                    <div className="inputBox">
                        <input
                            type="submit"
                            name=""
                            value="Iniciar Sesión"
                            className="pretty-button"
                        />
                    </div>
                </div>
                <p className="forgot">
                    <RouterLink to="/forgot-password">
                        Olvidaste tu Contraseña?
                    </RouterLink>
                </p>

                <div className="alternativeLogin">
                    <label>Sino ingresá con:</label>
                    <div className="iconGroup">
                        <a href="#" className="btn icon-details">
                            <i
                                className="fab fa-facebook"
                                aria-hidden="true"
                            ></i>{" "}
                            Facebook
                        </a>

                        <a href="#" className="btn icon-details">
                            <i
                                className="fab fa-twitter"
                                aria-hidden="true"
                            ></i>{" "}
                            Twitter
                        </a>

                        <a href="#" className="btn icon-details">
                            <i className="fab fa-google" aria-hidden="true"></i>{" "}
                            Google
                        </a>
                    </div>
                </div>
            </div>
            <p
                className="forgot"
                style={{
                    marginTop: "2rem",
                }}
            >
                Todavía no estás registrado?&nbsp;
                <RouterLink to="/signup">Registrate acá</RouterLink>
            </p>
        </form>
    );
};
