// renders a single person's details
const Contant = ({ person }) => {
    return <div key={person.id}>{person.name} {person.number}</div>
}

export default Contant