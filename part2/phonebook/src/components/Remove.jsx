const Remove = ({ id, handleDeletePerson }) => {
    return (
        <button key={id} onClick={() => handleDeletePerson(id)}>delete</button>
    )
}

export default Remove;