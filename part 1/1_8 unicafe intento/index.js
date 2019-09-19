import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = () => {

const newClicks = { 
  good: clicks.good + 1, 
  neutral: clicks.neutral,
  bad: clicks.bad
}
setClicks(newClicks)
total =+ 
average =+ 
positive =+
}  

const HandlerButtonNeutral = () => {

const newClicks = { 
  good: clicks.good, 
  neutral: clicks.neutral + 1,
  bad: clicks.bad,
  total = total + 1
  
}
setClicks(newClicks)
}  

const HandlerButtonBad = () => {
const newClicks = { 
  good: clicks.good}, 
  neutral: clicks.neutral,
  bad: clicks.bad + 1 
  total =+ 
  average =-
}
setClicks(newClicks)}  

const Statistics = (props) => {
  <div>
  <p> {props.text} {props.value}</p>
  <p> {props.text} {props.value}</p>
  <p> {props.text} {props.value}</p>
  <p> {props.text} {props.value}</p>
  <p> {props.text} {props.value}</p>
  <p> {props.text} {props.value}</p>
  <div/>
  }


const App = () => {
  // save clicks of each button to own state

  const [clicks, setClicks] = useState({good : 0, neutral : 0, bad : 0})
  const total = useState(0)
  const average = useState(0)
  const positive = useState(0)
  const stats = (positive/total*100)





  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={HandlerButtonGood}>good</button>
      <button onClick={HandlerButtonNeutral}>neutral</button>
      <button onClick={HandlerButtonBad}>bad</button>
      
      <h1>statistics</h1>
      <Statistics text="good" value={clicks.good} />
      <Statistics text="neutral" value={clicks.neutral} />
      <Statistics text="bad" value={clicks.bad} />
      <Statistics text="all" value={all} />
      <Statistics text="average" value={average} />
      <Statistics text="positive" value={positive} />
      </div>

  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
