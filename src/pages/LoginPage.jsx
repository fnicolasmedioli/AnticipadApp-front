import { LoginBox } from "../auth/components";
import { GlobalHeader } from "../global/components";
import { GenericTemplate } from "./templates";
import { Link as RouterLink } from "react-router-dom";

export const LoginPage = () =>
{
    return (
        <GenericTemplate>
            <div className="form-container">
                <div className="form">                
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
                            <input type="submit" name="" value="Iniciar Sesión" className="pretty-button"/> 
                        </div>
                    </div>
                    <p className="forgot"><a href="#">Olvidaste tu Contraseña?</a></p>

                    <div className="alternativeLogin">
                        <label>Sino ingresá con:</label>
                        <div className="iconGroup">
                            <a href="#" className="btn icon-details">
                                <i className="fab fa-facebook" aria-hidden="true"></i> Facebook
                            </a>

                            <a href="#" className="btn icon-details">
                                <i className="fab fa-twitter" aria-hidden="true"></i> Twitter
                            </a>

                            <a href="#" className="btn icon-details">
                                <i className="fab fa-google" aria-hidden="true"></i> Google
                            </a>
                        </div>
                    </div>
                </div>

                <p className="forgot" style={{
                    marginTop: "2rem"
                }}>
                    Todavía no estás registrado?&nbsp;
                    <RouterLink to="/signup">Registrate acá</RouterLink>
                </p>
            </div>
        </GenericTemplate>
    );
};
