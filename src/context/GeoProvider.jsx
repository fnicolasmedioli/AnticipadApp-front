import { useContext, useState, useEffect } from "react";

import geoDataJSON from "/public/data/geoData.json";
import { GeoContext } from ".";
import { simplifyString } from "../helpers";

export const GeoProvider = ({ children }) => {
    const [geoData, setGeoData] = useState({});

    const searchLocation = s => {
        const processedInput = simplifyString(s);

        const results = [];

        for (const location of geoData)
            if (location.simplifiedName.includes(processedInput))
                results.push(location);

        return results;
    };

    useEffect(() => {
        const processedData = [];

        for (const region in geoDataJSON) {
            for (const location of geoDataJSON[region]) {
                const simplifiedName = simplifyString(location[0]);
                processedData.push({
                    name: location[0],
                    simplifiedName,
                    id: location[1],
                    region,
                });
            }
        }

        setGeoData(processedData);
    }, []);

    return (
        <GeoContext.Provider
            value={{
                searchLocation,
            }}
        >
            {children}
        </GeoContext.Provider>
    );
};
