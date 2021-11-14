import React from 'react'
import CountryInfo from './CountryInfo'
import Weather from './Weather'

export default function DisplayCountry({ country, weather }) {

    if (!country) return <div></div>
    else
        return(
            <>
                <CountryInfo country={country} />
                <Weather weather={weather} />
            </>
        )
}