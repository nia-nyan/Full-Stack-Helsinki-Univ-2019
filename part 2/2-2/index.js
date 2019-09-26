import React from 'react'
import ReactDOM from 'react-dom'



//   const Content = (props) => {
  
//     return (
//       <div>
//         <Part part={props.part1} exercises={props.exercises1} />
//         <Part part={props.part2} exercises={props.exercises2} />
//         <Part part={props.part2} exercises={props.exercises2} />
//       </div>
//     )
//   }
  
//   const Part = (props) => (
//     <div>
//       <p>{props.part} {props.exercises}</p>
//     </div>
//   )

   
//   const Total = (props) => {
  
//     return (
  
//       <div>
//         <p>Number of exercises Total {props.exercises1 + props.exercises2 + props.exercises3}</p>
//       </div>
//     )
//   }
  

//   const Header = (
//   console.log(" Part is working")
//   return (
//     <div>
//       <h1>{title}</h1>
//         <ul>
//         {Part()}
//         </ul>
//     </div>
//   )}

  
// }

 
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

  const Course = ({course}) => {

    const Header = ({course}) => 
    
    {course.map(<li key={course.parts.id}>{course.name}</li>)}
  
      return (
        <div>
          <h1>{props.course}</h1>
        </div>
      )
    }

  return (
    <div>
      <Course />
    </div>
  )

  return(
    <div>
      <Header />
      <Content />
      {/* <Total /> */}
        <ul>
        {Part()}
        </ul>
    </div>
  )
}
}


ReactDOM.render(<App />, document.getElementById('root'))