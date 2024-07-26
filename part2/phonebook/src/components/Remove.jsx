const Remove = ({ id, handleDeletePerson }) => <button key={id} onClick={() => handleDeletePerson(id)}>delete</button>

export default Remove;