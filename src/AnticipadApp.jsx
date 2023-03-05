import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";

import "./style/global-style.scss";
import "./style/auth-style.scss";
import "./style/my-account.scss";
import { MainRouter } from "./Router";
import { UserProvider, GeoProvider } from "./context";

const AnticipadApp = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <GeoProvider>
                    <MainRouter />
                </GeoProvider>
            </UserProvider>
        </BrowserRouter>
    );
};

export default AnticipadApp;
