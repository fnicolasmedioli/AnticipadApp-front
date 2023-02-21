import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";
import { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import "./style/global-style.scss";
import "./style/auth-style.scss";
import { MainRouter } from "./Router";
import { UserContext, UserProvider } from "./context";

const AnticipadApp = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        console.log("ip-api request");
        axios
            .request({
                method: "get",
                url: "https://ipapi.co/json",
            })
            .then(response => {
                const location = {
                    city: response.data.city,
                    region: response.data.region,
                };
                console.log("Location: ");
                console.log(location);
                setUserData({
                    ...userData,
                    location,
                });
            })
            .catch(console.error);
    }, []);

    return (
        <BrowserRouter>
            <UserProvider
                value={{
                    userData,
                    setUserData,
                }}
            >
                <MainRouter />
            </UserProvider>
        </BrowserRouter>
    );
};

export default AnticipadApp;
