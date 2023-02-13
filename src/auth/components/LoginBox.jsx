import { useForm } from "../hooks/useForm";

export const LoginBox = () =>
{
    const {
        formState,
        onInputChange
    } = useForm({
        "email": "",
        "password": ""
    });

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col col-xs-10 col-sm-8 col-lg-6">
                    <div className="auth-box login-box">
                        <form onSubmit={onSubmit}>
                            <label htmlFor="email-input">
                                Email
                            </label>
                            <input type="email" name="email" onChange={onInputChange} className="form-control" id="email-input" />
                            <label htmlFor="password-input">
                                Contraseña
                            </label>
                            <input type="password" name="password" onChange={onInputChange} className="form-control" id="password-input" />
                            <button className="btn btn-outline-info">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};