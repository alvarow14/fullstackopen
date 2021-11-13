import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Numbers from './components/Numbers'
import SearchField from './components/SearchField'
import axios from 'axios'




function App() {

  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ filtered, setFiltered ] = useState([])
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(`response.data`, response.data)   
        setPersons(response.data)
    })
  }, [])




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
    console.log(`e.target.value`, e.target.value)
    console.log(`newSearch`, newSearch)

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