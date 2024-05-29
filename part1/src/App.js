// Header takes care of rendering the name of the course,
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>
        {props.parts} {props.exercises}
      </p>
    </> 
  )
  
}

// Content renders the parts and their number of exercises 
const Content = (props) => {
  return ( 
    <>
      <Part parts={props.part[0]} exercises={props.exercise[0]}/>
      <Part parts={props.part[1]} exercises={props.exercise[1]}/>
      <Part parts={props.part[2]} exercises={props.exercise[2]}/>
    </>
  )
}

// Total renders the total number of exercises
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
    </>
  )
}
const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content part={parts} exercise={exercises}/>
      <Total exercises={exercises} />
    </div>
  )
}

export default App