import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { IndexPage } from "./index/pages/IndexPage";

import "./global/style/global-style.scss";

const AnticipadApp = () =>
{
    return (
        <IndexPage />
    );
};

export default AnticipadApp;