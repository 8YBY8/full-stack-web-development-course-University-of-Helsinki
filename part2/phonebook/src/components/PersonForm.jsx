// the form for adding new people to the phonebook
import axios from 'axios'
const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, handleNameChange, handleNumberChange }) => {
    const addPerson = (event) => {
      event.preventDefault();
      console.log('button clicked', event.target);
  
      const nameExists = persons.some(person => person.name === newName);
      if (nameExists) {
        return window.alert(`${newName} is already added to phonebook`);
      }
  
      const nameObject = {
        name: newName,
        number: newNumber,
      };
  
      // setPersons(persons.concat(nameObject));
      // setNewName('');
      // setNewNumber('');

      axios
        .post('http://localhost:3001/persons', nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('');
        })
    };
  
    return (
      <form onSubmit={addPerson}>
        <div>
          Name: 
          <input 
            value={newName} 
            onChange={handleNameChange}
          />
        </div>
        <div>
          Number: 
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
  };
  
  export default PersonForm;
  

