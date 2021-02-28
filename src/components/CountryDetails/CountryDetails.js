import React, { useEffect } from 'react';
import './CountryDetails.css';
import Country from '../Country/Country.js';
import {useState} from 'react';
const CountryDetails = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(console.log("There is a problem."));
    }, []);
    const [singleCountry, setSingleCountry] = useState([]);
    const handleCountryDetailsButton = (props)=> {
        setSingleCountry(props);
        console.log(props);
    }
    return (
        <div style={{display: 'flex'}}>
            <div style={{width: '60%'}}>
                <h1>Countries: </h1>
                {
                    countries.map(country =>
                        <Country 
                        country={country} 
                        handleCountryDetailsButton={handleCountryDetailsButton}
                        >
                        </Country>  
                    )
                }
            </div>
            <div style={{width: '35%', margin: '5%'}}>
                <h1 style={{color: '#28B463 '}}>{singleCountry.name}</h1>
                <img id="flag" src={singleCountry.flag} alt=""/>
                <ul>
                    <li>Capital: {singleCountry.capital}</li>
                    <li>Region: {singleCountry.region}</li>
                    <li>Area: {singleCountry.area}</li>
                    <li>Population: {singleCountry.population}</li>
                    <li>Demonym: {singleCountry.demonym}</li>
                    <li>Timezones: {singleCountry.timezones}</li>
                    
                </ul>
            </div>
        </div>
    );
};

export default CountryDetails;