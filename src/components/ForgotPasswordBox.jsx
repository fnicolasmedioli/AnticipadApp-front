import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const ForgotPasswordBox = () => {
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

                <h1>Recuperar contraseña</h1>

                <div className="input">
                    <div className="inputBox">
                        <label htmlFor="email-input">Email</label>
                        <input type="email" id="email-input" />
                    </div>
                    <div className="inputBox">
                        <input
                            type="submit"
                            name=""
                            value="Recuperar"
                            className="pretty-button"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};
