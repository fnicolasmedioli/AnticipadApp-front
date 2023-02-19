import { useContext, useState } from "react";

import { UserContext } from "../context";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const LocationBox = () =>
{
    const { userData } = useContext(UserContext);
    const [ inputValue, setInputValue ] = useState("");

    // Boolean to manage input content when location is detected
    const [ firstValueSettled, settleFirstValue ] = useState(false);

    const city = userData?.location?.city;
    const region = userData?.location?.region;
    const locationText = (city && region) ? `${city}, ${region}` : "";

    if (!firstValueSettled && locationText)
    {
        setInputValue(locationText);
        settleFirstValue(true);
    }

    function onInputChange({target})
    {
        setInputValue(target.value);
    }

    return (
        <div className="location-box">
            <span>Estás en </span>
            <div className="location-input-container">
                <input
                    type="text"
                    value={inputValue}
                    name="search-place-input"
                    placeholder="Ingresa tu localidad..."
                    onChange={onInputChange}
                />
                <span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </div>

            <div className="search-results-box hidden">
                <div className="search-result">
                    Rauch, Buenos Aires
                </div>
                <div className="search-result">
                    Tandil, Buenos Aires
                </div>
            </div>
        </div>
    );
};