import { useState } from 'react'

// // a proper place to define a component
// const Statistics = (props) => {
//   // ...
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   // do not define a component within another component
//   const Statistics = (props) => {
//     // ...
//   }

//   return (
//     // ...
//   )
// }

const Statistics = ({good, neutral, bad}) => {
  // console.log(props)
  // const {good, neutral, bad} = props
  // console.log(good)
  if(good + bad + neutral === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
        <p>good {good} <br></br> 
          neutral {neutral} <br></br>
          bad {bad} <br></br>
          all {good + bad + neutral} <br></br>
          average {(good - bad) / (good + bad + neutral)}  <br></br>
          positive {good / (good + bad + neutral) * 100}  %
        </p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App