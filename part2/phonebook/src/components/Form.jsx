import React from 'react'



function Form({ handleNameChange, handleNumberChange, handleSubmit, newName, newNumber }) {
    return(
        <>
            <h2>Add new contact</h2>
            <form onSubmit={handleSubmit}>
                name: <input 
                    value={newName}
                    onChange={handleNameChange}
                /><br />
                number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                /><br />
                <button type="submit">add</button>
            </form>
        </>
    )
}


export default Form