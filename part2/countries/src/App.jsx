import React from 'react'
import Note from './components/Note'




const App = ({ notes }) => {


  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
            <Note note={note} key={note.id} />
        )}
      </ul>
    </>
  )
}



export default App