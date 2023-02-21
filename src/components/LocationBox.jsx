import { useContext, useState, useRef } from "react";

import { UserContext } from "../context";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LocationBox = () => {
    const { userData } = useContext(UserContext);
    const [inputValue, setInputValue] = useState("");

    const inputRef = useRef();
    const resultsRef = useRef();

    // Boolean to manage input content when location is detected
    const [firstValueSettled, settleFirstValue] = useState(false);

    const city = userData?.location?.city;
    const region = userData?.location?.region;
    const locationText = city && region ? `${city}, ${region}` : "";

    if (!firstValueSettled && locationText) {
        setInputValue(locationText);
        settleFirstValue(true);
    }

    function onInputChange({ target }) {
        setInputValue(target.value);
    }

    function showResults() {
        resultsRef.current.classList.remove("hidden");
    }

    function hideResults() {
        resultsRef.current.classList.add("hidden");
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
                    onFocus={showResults}
                    onBlur={hideResults}
                    ref={inputRef}
                />
                <span
                    onClick={() => {
                        inputRef.current.select();
                    }}
                >
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </div>

            <div className="search-results-box hidden" ref={resultsRef}>
                <div className="search-result">Rauch, Buenos Aires</div>
                <div className="search-result">Tandil, Buenos Aires</div>
            </div>
        </div>
    );
};
