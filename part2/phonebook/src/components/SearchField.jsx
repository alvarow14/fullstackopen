import React from 'react'





function SearchField({ filtered, handleSearchChange, newSearch }) {
    
    if (filtered.length === 0) {
        return (
            <>
                <h2>Filter contacts by name</h2>
                name: <input
                    type="text"
                    value={newSearch}
                    onChange={handleSearchChange}
                />
                <h3>Filtered contacts</h3>
                <div>No matches found.</div>
            </>
        )
    } else {
        return (
            <>
                <h2>Filter contacts by name</h2>
                name: <input
                    type="text"
                    value={newSearch}
                    onChange={handleSearchChange}
                />
                <h3>Filtered contacts</h3>
                {filtered.map(element => (
                    <div key={element.name+'_filtered'}>{element.name} → {element.number}</div>
                ))}
            </>
        )
    }
}

export default SearchField