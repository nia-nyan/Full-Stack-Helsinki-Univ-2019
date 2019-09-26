import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const Vote = (props) => {



//   return (
//     copy[selected] += 1
//   )
// }


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [max, setMax] = useState(0)
  const [maxpos, setMaxpos] = useState(0)
  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  const copy = { ...points }

  const handleButton = () => {
    setSelected(Math.floor(Math.random() * (5 - 0 + 1)) + 0)
  }

  const mostVotes = () => {

    copy[selected] += 1

    // console.log(copy[selected])

    for (let i = 0; i < 6; i++) {

      if (copy[i] > max) {

        setMax(copy[i])
        setMaxpos(i)

      }

    }

    // console.log(max, maxpos)

  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <button onClick={mostVotes}>vote</button>
      <button onClick={handleButton}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>"{props.anecdotes[maxpos]}" has {max} votes</p>
    </div>

  )

}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)