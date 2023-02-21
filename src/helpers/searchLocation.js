import geoData from "../data/geoData.json";

export const searchLocation = s => {
    const loweredSearch = s.toLowerCase();

    const results = [];
    for (const region in geoData) {
        for (const location of geoData[region]) {
            if (location[0].toLowerCase().includes(loweredSearch))
                // [City, ID, Region]
                results.push([location[0], location[1], region]);
        }
    }
    return results;
};
