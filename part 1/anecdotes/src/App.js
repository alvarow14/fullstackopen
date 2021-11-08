import React, { useState } from 'react'

const Button = ({ text, action }) => {
  return (
    <>
      <button onClick={action}>{text}</button>
    </>
  )
}

const VoteButton = ({ text, action }) => {
  return (
    <>
      <button onClick={action}>{text}</button>
    </>
  )
}

const DisplayTitle = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const votesArr = new Uint8Array(anecdotes.length)
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(votesArr)

  const randomFromArrayLength = (array) => {
    let randomNumber = Math.floor(Math.random() * array.length)
    return randomNumber
  }

  const handleNext = () => {
    let newSelected = randomFromArrayLength(anecdotes)
    setSelected(newSelected)
  }

  const handleVote = () => {
    let newVotesArr = [...points]
    // console.log("points", points)
    // console.log("votesArr", votesArr)
    // console.log("newVotesArr", newVotesArr)
    newVotesArr[selected] += 1
    // console.log("newVotesArr", newVotesArr)
    setPoints(newVotesArr)

  }
  // checking most voted
  let mostVotedIndex = points.indexOf(Math.max(...points))
  
  return (
    <>
      <DisplayTitle text='Anecdote of the day' />
      <div>{anecdotes[selected]}</div> 
      <Button text='next anecdote' action={handleNext}  /> <br></br> <br></br>
      <div>Has {points[selected]} votes</div>
      <VoteButton text='vote' action={handleVote}  /> <br></br><br></br>
      <DisplayTitle text='Most voted anecdote' />
      <div>{anecdotes[mostVotedIndex]}</div>
    </>
  )
}

export default App