import React from 'react'





const SearchField = ({ handleSearch, search }) => {
  return (
    <>
      <h1>Search the country</h1>
      find countries <input
        value={search}
        onChange={handleSearch}
      />
    </>
  )
}

export default SearchField