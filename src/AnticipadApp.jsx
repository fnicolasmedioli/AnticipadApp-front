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


const AnticipadApp = () =>
{
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        console.log("ip-api request");
        axios.request({
            method: "get",
            url: "https://cors-anywhere.herokuapp.com/https://ip-api.org/json/",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                "Access-Control-Allow-Credentials": "true"
            }
        })
        .then(response => {
            setUserData({
                ...userData,
                location: {
                    city: response.data.city,
                    region: response.data.region
                }
            });
        })
        .catch(console.error);
    }, []);

    return (
        <BrowserRouter>
            <UserProvider value={{
                userData,
                setUserData
            }}>
                <MainRouter />
            </UserProvider>
        </BrowserRouter>
    );
};

export default AnticipadApp;