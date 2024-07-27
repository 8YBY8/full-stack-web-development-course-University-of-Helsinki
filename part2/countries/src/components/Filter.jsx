const Filter = ({ search, handleSearchChange}) => {
    console.log(search);
    return (
        <div>
            find countries 
            <input 
                value={search}
                onChange={handleSearchChange}
            />
        </div>
    )
}

export default Filter