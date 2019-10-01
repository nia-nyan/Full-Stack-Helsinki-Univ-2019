import React from 'react'
import ReactDOM from 'react-dom'

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

  // const Course = (props) => {

  //   const Header = () => {

  //     return (
  //       <div>
  //         <h1>{course.name}</h1>
  //       </div>
  //     )
  //   }

  // const Part = 

  //   course.parts.map(note => <li>{course.name}</li>)
  //   console.log(Part)





  //   const Content = () => {

  //     return (
  //       <div>
  //         <ul>
  //           {Part()}
  //         </ul>
  //       </div>
  //     )
  //   }


  //   return (
  //     <div>
  //       <Header />
  //       <Content />
  //       {/* <Total /> */}
  //     </div>
  //   )
  // }

  // return (
  //   <div>
  //     <Course />
  //   </div>
  // )


  return (
    <div>
      <h1>Course</h1>
      <ul>
        {Object.keys.map.course(name => <li key={name.id}>{course.name}</li>)}

      </ul>
    </div>
  )


}



ReactDOM.render(<App />, document.getElementById('root'))