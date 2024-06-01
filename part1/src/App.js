// Header takes care of rendering the name of the course,
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  // console.log(props.part.name)
  return(
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </> 
  )
}

// Content renders the parts and their number of exercises 
const Content = (props) => {
  // console.log(props)
  // console.log(props.part1)
  return ( 
    <>
      <Part part={props.part1}/>
      <Part part={props.part2}/>    
      <Part part={props.part3}/>  
    </>
  )
}

// Total renders the total number of exercises
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.num1 + props.num2 + props.num3}</p>
    </>
  )
}
const App = () => {

  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]}/>
      <Total num1={parts[0].exercises} num2={parts[1].exercises} num3={parts[2].exercises} />
    </div>
  )
}

export default App