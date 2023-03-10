import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "./global/style/global-style.scss";
import "./auth/style/auth-style.scss";
import "animate.css";
import { MainRouter } from "./global/Router";

const AnticipadApp = () =>
{
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
};

export default AnticipadApp;