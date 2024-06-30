const Total = ({ parts }) => {
    let partsExercises = []
    for (let i = 0; i < parts.length; i++) {
        partsExercises.push(parts[i].exercises)
    }

    const total = partsExercises.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    );

    return(
        <div>
            <b>total of {total} exercises</b>
        </div>
    )
}

export default Total