import React from 'react'

export default function CountryInfo({ country }) {
    console.log(`country`, country)
    
    return (
        <>
            <h1>Filtered country</h1>
            <h2>{country.name}</h2>
            <div>capital: {country.capital}</div>
            <div>population: {country.population} hab.</div>
            <h3>Spoken languages</h3>
                <ul>
                    {country.languages.map(lang => 
                        <li>{lang.name}</li>
                    )}
                </ul>
            <img src={country.flags.png} alt={country.name} width="50px"></img>
        </>
    )
}
