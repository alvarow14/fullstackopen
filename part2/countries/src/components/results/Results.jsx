import React from 'react'
import Results11 from './Results11'
import Results1 from './Results1'
import Results5 from './Results5'
import Results0 from './Results0'


function Results({ filtered, handleShowClick, weather, country }) {

    if (filtered.length > 10) {
        return(
            <Results11 />
        )
    } else if (filtered.length === 1) { 
        return(
            <Results1 country={country} weather={weather} />
        )
    } else if (!filtered.length) {
        return (
            <Results0 />
        )
        
    } else {
        return(
            <Results5 filtered={filtered} handleShowClick={handleShowClick} />
        )
    }
}
export default Results