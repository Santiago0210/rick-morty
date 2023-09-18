import axios from "axios"
import { useState } from "react"






const useFetch = (url) => {

    const [infoApi, setInfoApi] = useState()
   
    const [hasError, setHasError] = useState(false)

    const getAppi = () =>{
        
        axios.get(url)
          .then(res => {
            setHasError(false)
            setInfoApi(res.data)})
          .catch(err => {
            setHasError(true)
            console.log(err)})
    }
    return [infoApi, getAppi, hasError]
}

export default useFetch