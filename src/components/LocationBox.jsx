import { useContext, useState, useRef } from "react";

import { UserContext } from "../context";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { searchLocation } from "../helpers/searchLocation";

export const LocationBox = () => {
    const { userData } = useContext(UserContext);
    const [inputValue, setInputValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const inputRef = useRef();
    const resultsRef = useRef();

    if (!searchResults && showResults) setShowResults(false);

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
        const inputContent = target.value;

        if (inputContent.length > 2) {
            const r = searchLocation(inputContent);
            setSearchResults(r);
            if (r.length) setShowResults(true);
            else setShowResults(false);
        } else {
            setSearchResults([]);
            setShowResults(false);
        }

        setInputValue(inputContent);
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
                    onFocus={() => {
                        if (searchResults.length) setShowResults(true);
                    }}
                    onBlur={() => {
                        setShowResults(false);
                    }}
                    ref={inputRef}
                    autoComplete="off"
                />
                <span
                    onClick={() => {
                        inputRef.current.select();
                    }}
                >
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </div>

            <div
                className={`search-results-box ${showResults ? "" : "hidden"}`}
                ref={resultsRef}
            >
                {searchResults.map(result => {
                    const text = `${result[0]}, ${result[2]}`;
                    return (
                        <div
                            className="search-result"
                            key={result[1]}
                            onMouseDown={() => {
                                setInputValue(text);
                            }}
                        >
                            {text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
