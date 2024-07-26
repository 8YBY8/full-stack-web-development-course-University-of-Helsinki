import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";
import Notification from "./components/Notification";
import ErrorNotification from "./components/ErrorNotification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter] = useState("");
  const [successfulMesssage, setSuccessfulMesssage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  // load the initial persons informations
  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      });
  }, []);

  // To enable editing of the input element, we have to register an event handler
  // that synchronizes the changes made to the input with the component's state
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    filter === "" ? setShowAll(true) : setShowAll(false);
  };

  const handleDeletePerson = (id) => {
    console.log("delete button clicked", id);
    const deletedPerson = persons.find(person => person.id === id);

    if (window.confirm(`Delete ${deletedPerson.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch( error => {
          setErrorMessage(`Information of ${deletedPerson.name} has already been removed from server`);
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
    }
  }

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if(personObject.name && personObject.number){
      const nameExists = persons.find((person) => person.name === newName);
      if (nameExists) {
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          const changedPerson = {...nameExists, number: newNumber}
          
          personService
            .update(nameExists.id, changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(p => p.id !== nameExists.id ? p : returnedPerson))
              setNewName("");
              setNewNumber("");
              setSuccessfulMesssage(`Number changed ${nameExists.name}`)
              setTimeout(() => {
                setSuccessfulMesssage(null)
              }, 3000)
            })
            // .catch(error => {
            //   alert(`${newName} is already deleted`)
            //   setPersons(persons.filter(person => person.id !== nameExists.id))
            // })
        }
      } else {
        personService
          .create(personObject)
          .then((returnedPerson) => {
            setPersons(persons.concat(returnedPerson));
            setNewName("");
            setNewNumber("");
            setSuccessfulMesssage(`Added ${personObject.name}`)
            setTimeout(() => {
              setSuccessfulMesssage(null)
            }, 3000)
        });
      }
    }
    
  };
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successfulMesssage} />
      <ErrorNotification message={errorMessage} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        showAll={showAll}
        filter={filter}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;