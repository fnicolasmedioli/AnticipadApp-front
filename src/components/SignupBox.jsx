import { Link as RouterLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const SignupBox = () => {
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

                <h1>Registro</h1>

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
                        <label htmlFor="password-input-2">
                            Repite la contraseña
                        </label>
                        <input type="password" id="password-input-2" />
                    </div>
                    <div className="inputBox">
                        <input
                            type="submit"
                            name=""
                            value="Registrarme"
                            className="pretty-button"
                        />
                    </div>
                </div>
            </div>

            <p
                className="forgot"
                style={{
                    marginTop: "2rem",
                }}
            >
                Ya estás registrado?&nbsp;
                <RouterLink to="/login">Ingresá acá</RouterLink>
            </p>
        </form>
    );
};
