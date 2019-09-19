import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    
    return (
        <div>
            <p>{props.part1} {props.exercises1}</p>
            <p>{props.part2} {props.exercises2}</p>
            <p>{props.part3} {props.exercises3}</p>
        </div>
    )
}

/*const Part = () =>*/

const Total = (props) => {

    return (

        <div>
            <p>Number of exercises Total {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}


const App = () => {

    // const-definitions
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
  
    return (

        <div>
            <Header course={course.name}/>
            <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises}/>
            <Content part2={course.parts[1].name} exercises2={course.parts[1].exercises}/>
            <Content part3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
            <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
        </div>

    )
}


ReactDOM.render(<App />, document.getElementById('root'))