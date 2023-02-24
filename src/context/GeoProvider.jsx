import { useContext, useState, useEffect } from "react";

import geoDataJSON from "../data/geoData.json";
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

export const GeoProvider = ({ children }) => {
    const [geoData, setGeoData] = useState({});

    const searchLocation = s => {
        const processedInput = simplifyString(s);
        const words = processedInput.split(" ");

        const results = [];

        for (let i = 0; i < geoData.length; i++) {
            const location = geoData[i];

            let matchCount = 0;

            for (const word of words)
                if (location.nameWords.includes(word)) matchCount++;

            if (matchCount) {
                results.push({
                    ...location,
                    matchCount,
                    nameWords: location.nameWords.length,
                });
            }
        }

        results.sort((a, b) => {
            if (a.matchCount > b.matchCount) return -1;
            if (b.matchCount < b.matchCount) return 1;
            if (a.nameWords < b.nameWords) return -1;
            return 1;
        });

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
                nameWords: simplifiedName.split(" "),
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
