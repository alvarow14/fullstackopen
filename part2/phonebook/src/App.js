import React, { useState } from 'react'
import Form from './components/Form'
import Numbers from './components/Numbers'
import SearchField from './components/SearchField'




function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ filtered, setFiltered ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      id: persons.length + 1,
    }

    if (!persons.find(element => element.name === newName)) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else alert(`${newName} is already added to phonebook.`)
  
  }
  
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value)

    const filteredArr = []
    for (let i = 0, longitud1 = persons.length; i < longitud1; i++) {
      if (persons[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
        filteredArr.push(persons[i])
      }
    }
    setFiltered(filteredArr)
  }
  
  return (
    <>
      <h1>Phonebook</h1>
      <SearchField
        filtered={filtered} 
        handleSearchChange={handleSearchChange}
        newSearch={newSearch}
      />
      <Form
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
      />
      <Numbers persons={persons} />
    </>
  )
}

export default App