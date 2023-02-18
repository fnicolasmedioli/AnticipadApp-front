import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";

import "./style/global-style.scss";
import "./style/auth-style.scss";
import { MainRouter } from "./Router";

const AnticipadApp = () =>
{
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
};

export default AnticipadApp;