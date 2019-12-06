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

    const Course = () => {

        const Header = () => {
            return (
                <div>
                    <h1>{course.name}</h1>
                </div>
            )
        }
    
        const Content = ({content}) => {
            return (
                <p>{content.name} {content.exercises}</p>
            )
        }
    
        const Part = () => 
        course.parts.map(partmap =>
            <Content 
            key={partmap.id} 
            content={partmap}
            />
            )
    
        const Sum = () => {
            const ex = course.parts.map(partmap =>
                partmap.exercises)   
            const sum = ex.reduce((acc,currval)=> acc + currval)
            return(
                <p>total of exercises {sum}</p>
            )
        }


        return (
            <div>
                <Header />
                {Part()}
                <Sum />
            </div>
        )
    }

    
    return (
        <div>
            <Course />
        </div>
    )
   
}

ReactDOM.render(<App />, document.getElementById('root'))

