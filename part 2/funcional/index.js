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


    {/*const Header = () => {
        return (
            <div>
                <h1>{course.name}</h1>
            </div>
        )

    }

   const Content = ({ partmap }) => {

        return (
                <li>{partmap.name}</li>
        )
    }


    const Part = ({ course }) => {
        course.parts.map(partmap =>
            <Content
                key={partmap.id}
                name={partmap}
            />
        )
    }}*/}



return (
    <div>
            {course.parts.map(partmap => <p>{partmap.name} {partmap.exercises}</p>)}
    </div>
    
)


{/*
    return (
        <div>
            <Header />
            <Part />
        </div>
    )*/}
}

ReactDOM.render(<App />, document.getElementById('root'))