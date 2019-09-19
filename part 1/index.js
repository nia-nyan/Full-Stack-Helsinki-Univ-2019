import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

  const total = () => (props.good + props.neutral + props.bad)
  const average = () => ((props.good * 1) + (props.neutral * 0) + (props.bad * (-1)))
  const positive = () => (props.good / total())

  if (props.good === 0 || props.neutral === 0 || props.bad === 0) {
    return (
      <div>
        <p> No feedback given </p>
      </div>
    )
  }
  return (

    <div>
      <p> good {props.good}</p>
      <p> neutral {props.neutral}</p>
      <p> bad {props.bad}</p>
      <p> all {total()}</p>
      <p> average {average()}</p>
      <p> positive {positive()}</p>
    </div>

  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>

  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)