import axios from "axios";
import { useEffect, useState } from "react";

import { UserContext } from ".";

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
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
        <UserContext.Provider
            value={{
                userData,
                setUserData,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
