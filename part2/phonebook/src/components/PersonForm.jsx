// the form for adding new people to the phonebook
// import axios from 'axios'
const PersonForm = ({ addPerson, newName, newNumber, handleNameChange, handleNumberChange }) => {
  
    return (
      <div>
        <form onSubmit={addPerson} >
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
      </div>
        
    );
  };
  
  export default PersonForm;
  

