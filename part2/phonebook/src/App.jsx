import { useState } from 'react'
<script src="lodash.js"></script>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const isExist = () => {
    persons.map((person) =>
      person.name === newName ? True : False
    )
  }

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    if(isExist){
      return window.alert(`${newName} is already added to phonebook`);
    }
    const nameObject = {
      name: newName,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  // To enable editing of the input element, we have to register an event handler
  // that synchronizes the changes made to the input with the component's state
const handleNameChange = (event) => {
  console.log(event.target.value)
  setNewName(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName} 
            onChange={handleNameChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => 
          <div key={person.name}>{person.name}</div>
          )}
      </div>
    </div>
  )
}

export default App