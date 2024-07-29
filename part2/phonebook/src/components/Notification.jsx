const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="mess">
        {message}
      </div>
    )
  }

export default Notification 