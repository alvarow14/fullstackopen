import React from 'react'
import CountryList from './CountryList'


function Results({ filtered, handleShow }) {

    if (filtered.length > 10) return (
        <>
            <h1>Filtered countries</h1>
            <div>Too many matches, specify more to filter</div>
        </>)

    else if (!filtered.length) return (
        <>
            <h1>Filtered countries</h1>
            <div>No country matches your filter, please specify fewer</div>
        </>)
    else return <CountryList
        filtered={filtered}
        handleShow={handleShow}
    />
}

export default Results