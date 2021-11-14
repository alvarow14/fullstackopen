import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchField from './components/SearchField'
import Results from './components/Results'
import DisplayCountry from './components/DisplayCountry'


function App() {

 
  /* Búsqueda: estado y manejador del evento */
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
    filterCountries(e.target.value)
  }

  /* Fetcheo y filtrado de paises: estados y manejadores */
  const [countries, setCountries] = useState([]) //array de totales
  const [filtered, setFiltered] = useState([]) //array de filtrados
  const [country, setCountry] = useState() // objeto country final
  
  useEffect(() => { //fetcheo todo el array de objectos 250 y lo meto en countries
    axios 
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  //estableciendo el array de filtered
  
  const filterCountries = (searchInput) => {
    const filteredArr = []


    for (let i = 0, longitud = countries.length; i < longitud; i++) {
      if (countries[i].name.toLowerCase().includes(searchInput.toLowerCase())) {
        filteredArr.push(countries[i])
      }
    }

    if (filteredArr === 1) {
      setCountry(filteredArr[0])
      console.log(`country`, country)
    } else {
      setFiltered(filteredArr)
      console.log(`filtered`, filtered)
    }
  }

  /* haciendo el togleo */
  const handleShow = (e) => {
    setCountry(filtered[e.target.parentElement.id])
  }

  const weather = 'mucho viento'

  return(
    <>
      <SearchField handleSearch={handleSearch} search={search} />
      <Results filtered={filtered} handleShow={handleShow} />
      <DisplayCountry country={country} weather={weather} />
    </>
  )
}
export default App

            













  /* Sobre el toggle 
  const manualSearch = (name) => {
    let filteredCountries = []

    for (let i = 0, longitud = countries.length; i < longitud; i++) {
      if (countries[i].name.toLowerCase().includes(name.toLowerCase())) {
        filteredCountries.push(countries[i])
      }
    }
    setFiltered(filteredCountries)
    console.log(`filteredCountries`, filteredCountries)
  }

  const handleShowClick = (e) => {
    // manualSearch(e.target.parentElement.id)
    <Results1 country={e.target.parentElement.id} />
  }
  */