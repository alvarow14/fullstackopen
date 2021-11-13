import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchField from './components/SearchField'
import Results from './components/results/Results.jsx'


function App() {

  /* ESTADOS */
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])

  /* EFECTOS */
  useEffect(() => {
    axios 
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const api_key = process.env.REACT_APP_API_KEY

  /* Variables globales */
  // let country
  // let weatherURL

  
  // toggle
  // useEffect(() => {
  //     axios 
  //         .get(weatherURL)
  //         .then(response => {
  //             setWeather(response.data)
  //             console.log(`response.data`, response.data)
  //         })
  // }, [weatherURL])

  /* MANEJADORES DE EVENTOS */

  const handleSearch = (e) => {
    setSearch(e.target.value)
    filterCountries(e)
  }
  const filterCountries = (e) => {
    let filteredCountries = []

    for (let i = 0, longitud = countries.length; i < longitud; i++) {
      if (countries[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
        filteredCountries.push(countries[i])
      }
    }
    
    setFiltered(filteredCountries)
    // console.log(`filteredCountries`, filteredCountries)
    // if (filteredCountries.length === 1) {
    //   country = filteredCountries[0]
    //   weatherURL = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
    // }
  }

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
    <Results1 country={e.target.parentElement.id}
  }


  return(
    <>
      <SearchField handleSearch={handleSearch} search={search} />
      <Results
        filtered={filtered}
        handleShowClick={handleShowClick}
        weather={weather}
        // country={country}
      />
    </>
  )
}

export default App