import React from 'react'
import CountryInfo from './CountryInfo'
import Weather from './Weather'

export default function Results1({ country, weather }) {

    return (
        <>
            <CountryInfo country={country} />
            <Weather weather={weather} />
        </>
    )
}
