import { GenericTemplate } from "./templates";
import { Link as RouterLink } from "react-router-dom";

export const ForgotPasswordPage = () =>
{
    return (
        <GenericTemplate>
            <div className="form-container">
                <form>
                    <div className="form">                
                        <h1>Recuperar contraseña</h1>
                        
                        <div className="input">
                            <div className="inputBox">
                                <label htmlFor="email-input">Email</label>
                                <input type="email" id="email-input" />
                            </div>
                            <div className="inputBox">
                                <input type="submit" name="" value="Recuperar" className="pretty-button"/> 
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </GenericTemplate>
    );
};