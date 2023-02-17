import { LoginBox } from "../auth/components";
import { GlobalHeader } from "../global/components";
import { GenericTemplate } from "./templates";

export const LoginPage = () =>
{
    return (
        <div className="form-container">
            <div className="form">
                <h2>AnticipadApp</h2>
                <h1>Bienvenido!</h1>
                <p>Ingresa para continuar con su compra</p>
                <div className="input">
                    <div className="inputBox">
                        <label for="">Email</label>
                        <input type="email" />
                    </div>
                    <div className="inputBox">
                        <label for="">Contraseña</label>
                        <input type="password" />
                    </div>
                    <div className="inputBox">
                        <input type="submit" name="" value="Iniciar Sesión" /> 
                    </div>
                </div>
                <p className="forgot"><a href="#">Olvidaste tu Contraseña?</a></p>

                <div className="alternativeLogin">
                    <label>Sino ingresá con:</label>
                    <div className="iconGroup">
                        <a href="#" target="_blank" class="btn icon-details">
                            <i class="fab fa-facebook" aria-hidden="true"></i> Facebook
                        </a>

                        <a href="#" target="_blank" class="btn icon-details">
                            <i class="fab fa-twitter" aria-hidden="true"></i> Twitter
                        </a>

                        <a href="#" target="_blank" class="btn icon-details">
                            <i class="fab fa-google" aria-hidden="true"></i> Google
                        </a>

                    </div>
                </div>
                
            </div>

        </div>
        
    );
};
