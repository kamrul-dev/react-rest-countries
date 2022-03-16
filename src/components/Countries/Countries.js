import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    // console.log(countries);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h2>The Rest Countries: {countries.length}</h2>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}   //use key for improve the react applicaton perforamnce
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;