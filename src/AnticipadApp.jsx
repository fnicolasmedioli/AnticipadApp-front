import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { MainHeader, MainImage, NextEventsBanner, WhyAnticipadApp } from "./components";
import "./style/style.scss";



const AnticipadApp = () =>
{
    return (
    <>
        <MainHeader />
        <MainImage />
        <NextEventsBanner />
        <WhyAnticipadApp />
    </>
    );
};

export default AnticipadApp;