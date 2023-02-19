import { useContext } from "react";

import { UserContext } from "../context";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LocationBox = () =>
{
    const { userData } = useContext(UserContext);

    const city = userData?.location?.city;
    const region = userData?.location?.region;

    const locationText = (city && region) ? `${city}, ${region}` : "Ingresa tu localidad...";

    const inputStyle = (city && region) ? {} : {
        fontStyle: "italic",
        color: "grey"
    };

    return (
        <div className="location-box">
            <span style={{
                whiteSpace: "nowrap"
            }}>Estás en </span>
            <div className="location-input-container">
                <input type="text" value={locationText} readOnly style={inputStyle} />
                <span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </div>
        </div>
    );
};