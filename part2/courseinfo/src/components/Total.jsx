const Total = ({ parts }) => {
    // console.log(parts);
    var total = 0
    for (let i = 0; i < parts.length; i++) {
        // console.log(parts[i].exercises);
        total += parts[i].exercises
    }
    return(
        <div>
            <b>total of {total} exercises</b>
        </div>
    )
}

export default Total