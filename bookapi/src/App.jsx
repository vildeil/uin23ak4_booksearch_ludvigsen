import { useEffect, useState } from 'react'
import Searchresults from './components/Searchresults'
import './App.css'

function App() {

  const [content, setContent] = useState([])
 
  const getData = async() => {
    fetch(`https://openlibrary.org/search.json?q=title:"James Bond"`)
    .then(response => response.json())
    .then(data => setContent(data.docs))
    .catch(error => console.error(error))
}

  useEffect(()=>{
    getData()
  },[])

  return (
  
    <Searchresults content={content} />
  
  )
}

export default App
