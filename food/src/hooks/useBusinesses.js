import {useEffect,useState} from "react"
import yelp from "../api/yelp"

/* this moves the hook to another file so
it is reusable

although im getting weerid sythetic event resuse error th
that is preventing me to search multiple times in a row
*/

export default function(term){
  const [results,setResults] = useState([])
  const [error,setErrorMessage] = useState("")
  const searchApi = (term) =>{
    yelp.get("/search",
      {
        params: {
        limit: 50,
        term,
        location: "san jose"
      }}
    )
    .then(function(response){
      setResults(response.data.businesses)
    })
    .catch(function(error){
      console.log(error);
      setErrorMessage("Something went wrong")
      setResults([])
    })
  }
  useEffect(function(){
    searchApi("meat")
  },[])


  return [searchApi,results,error]
}
