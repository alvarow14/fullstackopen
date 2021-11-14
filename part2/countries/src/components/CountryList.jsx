import React from 'react'

export default function CountryList({ filtered, handleShow }) {
    

    return (
        <>
            <h1>Filtered countries</h1>
            {filtered.map((element, index) => {
                return(
                    <>
                        <ul>
                            <li
                                id={index}
                                key={index+element.name}
                                
                                >{element.name}
                            <input value="show" type="button" onClick={handleShow} />
                            </li>
                        </ul>
                    </>
                )
            })}
        </>
    )
}
