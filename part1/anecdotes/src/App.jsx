import { useState } from 'react'

const updatePoints = ({selected, points}) => {
  const copy = [...points]
  // increment the value in position selected by one
  copy[selected] += 1
  return (
    copy
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  
  var point = new Array(anecdotes.length+1).join('0').split('').map(parseFloat) 
  const [points, setPoints] = useState(point)
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div>
      {anecdotes[selected]} <br />
      has {points[selected]} votes <br />
      <button onClick={() => setPoints(updatePoints({selected, points}))}>vote</button> {points[selected]}
      <button onClick={() => setSelected(getRandomInt(anecdotes.length))}>next anecdote</button>
    </div>
  )
}

export default App