import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) => {

  const Part = ({course}) => {course.map(<li key={course.parts.id}>{course.name}</li>)}
  console.log(" Part is working")
  return (
    <div>
      <h1>{title}</h1>
        <ul>
        {Part()}
        </ul>
    </div>
  )
}

  

  {/*const Total = (props) => {

    return (

      <div>
        <p>Number of exercises Total {props.exercises1 + props.exercises2 + props.exercises3}</p>
      </div>
    )
  }*/}

  

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))