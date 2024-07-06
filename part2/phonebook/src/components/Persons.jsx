// renders all people from the phonebook
import Contant from "./Content";
const Persons = ({ persons, showAll, filter}) => {
  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div>
      {personsToShow.map(person => 
        <Contant key={person.id} person={person}/>
      )}
    </div>
  )
}

export default Persons