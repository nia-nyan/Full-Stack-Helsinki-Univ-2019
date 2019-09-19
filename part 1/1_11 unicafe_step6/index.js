import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

    const total = () => (props.good + props.neutral + props.bad)
    const average = () => ((props.good * 1) + (props.neutral * 0) + (props.bad * (-1)))
    const positive = () => (props.good / total())

    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
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
                    <td>neutral</td>
                    <td>{props.neutral}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{props.bad}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{total()}</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>{average()}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>{positive()}</td>
                </tr>
            </table>
        </div>

    )

}

const Button = (props) => (

    <button onClick={props.value}>{props.text}</button>

)



const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
        <div>
            <h1>give feedback</h1>
            <Button value={() => setGood(good + 1)} text="good" />
            <Button value={() => setNeutral(neutral + 1)} text="neutral" />
            <Button value={() => setBad(bad + 1)} text="bad" />


            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>

    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)