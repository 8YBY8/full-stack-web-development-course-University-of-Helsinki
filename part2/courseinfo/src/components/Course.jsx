import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
    const {id, name, parts} = course
    return (
      <div>
        <Header key={id} name={name}/>
        <Content key={parts.id} parts={parts} />
        <Total parts={parts} />
      </div>
    )
  }
  
  export default Course