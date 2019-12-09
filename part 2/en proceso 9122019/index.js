import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    const Course = () => {

        const Coursenum = () =>
            courses.map(coursesmap => {
                return coursesmap.parts.map(coursepartsmap => (
                <h1>{coursesmap.name}</h1>
            <p>{coursepartsmap.name} {coursepartsmap.exercises}</p>
                )
            
            }
        }


            // }
            //     <Header
            //         key={coursesmap.id}
            //         courseinfo={coursesmap}
            //     />

                // ,
                // courses.parts.map(partmap =>
                //     <Content
                //         key={partmap.id}
                //         content={partmap}
                //     />

                )
            
        const Header = ({ courseinfo }) => {
            return (
                <div>
                    <h1>{courseinfo.name}</h1>
                </div>

            )
        }

        //    const Content = ({content}) => {
        //     return (
        //         <p>{content.name} {content.exercises}</p>
        //     )
        // }


     

        // const Part = ({ courseinfo }) => 
        // courseinfo.parts.map(partmap =>
        //     <Content 
        //     key={partmap.id} 
        //     content={partmap}
        //     />
        //     )

        //     const Sum = () => {
        //         const ex = course.parts.map(partmap =>
        //             partmap.exercises)   
        //         const sum = ex.reduce((acc,currval)=> acc + currval)
        //         return(
        //             <p>total of exercises {sum}</p>
        //         )
        //     }


        return (
            <div>
                {Coursenum()}

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
