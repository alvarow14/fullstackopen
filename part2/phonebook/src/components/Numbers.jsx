import React from 'react'


function Numbers({ persons }) {
    return(
        <>
            <h2>Numbers</h2>
            {persons.map(element => (
                <div key={element.name}>{element.name} → {element.number}</div>
            ))}
        </>
    )
}
export default Numbers