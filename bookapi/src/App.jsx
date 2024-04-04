import { useEffect, useState } from 'react'
import Searchresults from './components/Searchresults'
import './App.css'

function App() {

  const [APIvalue, setAPIValue] = useState("James Bond")

  const [bookcard, setBookcard] = useState([])
 
  const getData = async() => {
    fetch(`https://openlibrary.org/search.json?q=title:"${APIvalue}"`)
    .then(response => response.json())
    .then(data => setBookcard(data.docs))
    .catch(error => console.error(error))
}

  useEffect(()=>{
    getData()
  },[APIvalue])

  return (
  
    <Searchresults bookcard={bookcard} setAPIValue={setAPIValue} />
  
  )
}

export default App
