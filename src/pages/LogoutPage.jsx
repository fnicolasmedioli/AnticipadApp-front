import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext } from "react";

import { UserContext } from "../context";

export const LogoutPage = () => {
    Cookies.remove("logged");
    const { setUserData } = useContext(UserContext);
    setUserData(prev => ({
        ...prev,
        logged: false,
    }));

    return <Navigate to="/" replace={true} />;
};
