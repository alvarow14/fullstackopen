import React, { useState } from 'react'


const Title = ({ text }) => <h1>{text}</h1>
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  let all = good + neutral + bad
  let average = (good - bad) / all
  let positive = good / all * 100

  if (all === 0) return <p>No feedback given</p>
  return (
    <>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
  )
}

const StatisticsLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr> 

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    let newGood = good + 1
    setGood(newGood)
  }
  const handleNeutral = () => {
    let newNeutral = neutral + 1
    setNeutral(newNeutral)
  }
  const handleBad = () => {
    let newBad = bad + 1
    setBad(newBad)
  }


  return (
    <>
      <Title text={"give feedback"} />
      <Button onClick={handleGood} text={"good"} />
      <Button onClick={handleNeutral} text={"neutral"} />
      <Button onClick={handleBad} text={"bad"} />
      <Title text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App