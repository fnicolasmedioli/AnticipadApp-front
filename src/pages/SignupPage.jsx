import { LoginBox } from "../auth/components";
import { GlobalHeader } from "../global/components";
import { GenericTemplate } from "./templates";
import { Link as RouterLink } from "react-router-dom";

export const SignupPage = () =>
{
    return (
        <GenericTemplate>
            <div className="form-container">
                <div className="form">                
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
                            <label htmlFor="password-input-2">Repite la contraseña</label>
                            <input type="password" id="password-input-2" />
                        </div>
                        <div className="inputBox">
                            <input type="submit" name="" value="Registrarme" className="pretty-button"/> 
                        </div>
                    </div>
                
                </div>

                <p className="forgot" style={{
                    marginTop: "2rem"
                }}>
                    Ya estás registrado?&nbsp;
                    <RouterLink to="/login">Ingresá acá</RouterLink>
                </p>
            </div>
        </GenericTemplate>
    );
};
