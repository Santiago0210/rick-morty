import { useEffect, useRef, useState } from "react"
import './App.css'
import useFetch from "./hooks/useFetch"
import getRandomNumber from "./utils/getRandomNumber"
import LocationInfo from "./components/LocationInfo"
import ResidentCard from "./components/ResidentCard"



function App() {
  const [inputValue, setInputValue] = useState(getRandomNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hola'}`
  const [location, getLocation, hasError] = useFetch(url)

  //Hacer peticion//
  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputSearch = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }
  return (
    <div className="principal">
      <img className="image" src="/rick.jpg" alt=""></img>
      <form className="submit" onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" placeholder="...1 to 126"/>
        <button className="button__search">Search</button>
      </form>
      {
        hasError
          ? <h2>HEY! you must provide an id from 1 to 126</h2> : (
            <>
              <LocationInfo
                location={location}
              />
              <div className="secundary">
                {
                  location?.residents.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  )
                  )
                }
              </div>
            </>
          )
      }
    </div>
  )
}

export default App
