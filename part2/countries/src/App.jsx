import { useEffect, useState } from "react"
import Filter from "./components/Filter";
import Content from "./components/Content";
import countriesService from "./services/countries"
const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesService
      .getAll()
      .then((initialCountries) => {
        setCountries(initialCountries)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };



  return (
    <div>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <Content search={search} countries={countries} />
    </div>
  )
}

export default App