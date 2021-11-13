import React from 'react'

export default function Results5({ filtered, handleShowClick }) {
    
    // const handleShowClick1 = () => {
    //     handleShowClick
    // }
    
    return (
        <>
            <h1>Filtered countries</h1>
            {filtered.map((element, index) => {
                return(
                    <>
                        <ul>
                            <li id={element.name} key={index+element.name}>{element.name}
                            <button onClick={handleShowClick}>show</button>
                            </li>
                        </ul>
                    </>
                )
            })}
        </>
    )
}
