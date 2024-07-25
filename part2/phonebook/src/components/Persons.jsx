import Contant from "./Content"
import Remove from "./Remove"

const Persons = ({ persons, showAll, filter, handleDeletePerson }) => {
  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )

  return (
    <div>
      {personsToShow.map((person) => (
        <div key={person.id}>
          <Contant person={person} />
          <Remove id={person.id} handleDeletePerson={handleDeletePerson} />
        </div>
      ))}
    </div>
  );
};

export default Persons