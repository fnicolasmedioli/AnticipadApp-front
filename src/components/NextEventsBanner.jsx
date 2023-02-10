import { useEffect, useState } from "react";

import axios from "axios";


export const NextEventsBanner = () =>
{
    let [city, setCity] = useState(null);
    let [region, setRegion] = useState(null);

    let locationText = (city && region) ? `${city}, ${region}` : null;
    
    useEffect(() => {

        axios.request({
            method: "get",
            url: "https://ip-api.org/json/",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                "Access-Control-Allow-Credentials": "true"
            }
        })
        .then(response => {
            setCity(response.json()["city"]);
        })
        .catch(console.error);

    }, [])


    return (
        <section id="next-events-section">
            <div className="container-fluid next-events-banner">
                <div className="row">
                    <h2>Próximos eventos: {
                        locationText
                    }</h2>
                    <h4>...</h4>
                    <hr />
                </div>
            </div>
        </section>
    );
};