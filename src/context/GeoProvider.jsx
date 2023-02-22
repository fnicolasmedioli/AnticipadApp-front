import { useContext, useState, useEffect } from "react";

import geoDataJSON from "/public/data/geoData.json";
import { GeoContext } from ".";
import { simplifyString } from "../helpers";

const regionsMap = {
    10: "Catamarca",
    14: "Córdoba",
    18: "Corrientes",
    22: "Chaco",
    26: "Chubut",
    30: "Entre Ríos",
    34: "Formosa",
    38: "Jujuy",
    42: "La Pampa",
    46: "La Rioja",
    50: "Mendoza",
    54: "Misiones",
    58: "Neuquén",
    62: "Río Negro",
    66: "Salta",
    70: "San Juan",
    74: "San Luis",
    78: "Santa Cruz",
    82: "Santa Fe",
    86: "Santiago del Estero",
    90: "Tucumán",
    94: "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "02": "Ciudad Autónoma de Buenos Aires",
    "06": "Buenos Aires",
};

/*
function binarySearch(arr, s, low, high) {

    while (low < high)
    {
        const mid = Math.floor((low+high)/2);

        const toCompare = arr[mid].simplifiedName;

        if (s == toCompare)
            return mid;

        if (s > toCompare)
            low = mid + 1;
        else
            high = mid - 1;
    }

    return high;
}
*/

export const GeoProvider = ({ children }) => {
    const [geoData, setGeoData] = useState({});

    const searchLocation = s => {
        const processedInput = simplifyString(s);
        // const startSearchAt = binarySearch(geoData, processedInput, 0, geoData.length - 1);
        const results = [];

        for (let i = 0; i < geoData.length; i++) {
            const location = geoData[i];
            if (location.simplifiedName.includes(processedInput))
                results.push(location);
        }

        return results;
    };

    useEffect(() => {
        const processedData = [];

        for (const location of geoDataJSON) {
            const simplifiedName = simplifyString(location[0]);
            processedData.push({
                name: location[0],
                simplifiedName,
                id: location[1],
                region: regionsMap[location[2]],
            });
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
