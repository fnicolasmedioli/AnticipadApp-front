import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "./style/index.css";
import { MainHeader } from "./components";
import "./style/theme.scss";



const AnticipadApp = () =>
{
    return (
    <>
        <MainHeader />
        <div class="background-image">    
            <div className="space"></div>
        </div>
    </>
    );
};

export default AnticipadApp;