import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name, region, flag, capital} = props.country;
    return (
        <div>
            <div id="countryShortInfo">
                <h1>{name}</h1>
                <img src={flag} alt=""/>
                <p>Capital:: {capital}</p>
                <p>Region:: {region}</p>
                <button onClick={() => props.handleCountryDetailsButton(props.country)}>Details</button>
            </div>
        </div>
    );
};
export default Country;