import React from 'react'





function SearchField({ persons }) {
    return(
        <>
            <h2>Filter contacts</h2>
            <input
                type="text"
                value={newSearch}
                onChange={handleSearchChange}
            />

        </>
    )
}

export default SearchField