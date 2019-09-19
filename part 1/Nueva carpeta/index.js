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
       <table>
       <tr>
       <td>good</td>
       <td>{props.good}</td>
       </tr>
       <tr>
       <td>good</td>
       <td>{props.good}</td>
       </tr>
       <td>neutral</td>
       <td>bad</td>
       <td>all</td>
       <td>average</td>
       <td>positive</td>
       

       </table>
      <p>  </p>
      <p> neutral {props.neutral}</p>
      <p>  {props.bad}</p>
      <p>  {total()}</p>
      <p>  {average()}</p>
      <p>  {positive()}</p>
    </div>

  )
}

const Button = (props) => (
  <div>
    <button {props.text} {props.value}></button>
  </div>
)


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button text = "good" value = {() => setGood(good + 1)} />
      <Button text = "neutral" value = {() => setNeutral(props.neutral + 1)} />
      <Button text = "neutral" value = {() => setBad(props.bad + 1)} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>

  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)