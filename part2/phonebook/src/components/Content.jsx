// renders a single person's details
import Remove from "./Remove";
const Content = ({ person, handleDeletePerson }) => {
    // return <div key={person.id}>{person.name} {person.number}</div>
    return (
        <div key={person.id}>
            {person.name} {person.number} 
            <Remove person={person} handleDeletePerson={handleDeletePerson}/>
        </div>
    )
}

export default Content