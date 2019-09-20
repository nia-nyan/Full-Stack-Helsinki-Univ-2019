import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {

  const Header = (props) => {

    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    )
  } 

  const Content = (props) => {

    return (
      <div>
        <ul>
        {Part()}
        </ul>
      </div>
    )
  }

  const Part = (props) => {props.course.map(coursename=> <li>{props.course.name}</li>)}

  {/*const Total = (props) => {

    return (

      <div>
        <p>Number of exercises Total {props.exercises1 + props.exercises2 + props.exercises3}</p>
      </div>
    )
  }*/}

  
  return (
    <div>
      <Header course={course} />
      <Content/>
    </div>
  )
}

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
      <Course title={course.name} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))