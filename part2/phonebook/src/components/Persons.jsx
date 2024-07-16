// renders all people from the phonebook
import Contant from "./Content";
import Remove from "./Remove";
const Persons = ({ persons, showAll, filter}) => {
  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div>
      {personsToShow.map(person => 
        <Contant key={person.id} person={person}/>
        <Remove key={person.id} id={person.id}/>
        // <Remove key={person.id} id={person.id} />
      )}
    </div>
  )
}

export default Persons