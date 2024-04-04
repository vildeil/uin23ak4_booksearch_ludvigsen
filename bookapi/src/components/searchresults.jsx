import { useState } from "react"
import Bookcard from "./Bookcard"

export default function Searchresults({setAPIValue, bookcard}){

    const [APISearch, setAPISearch] = useState("") 

    const handleSearch = function(e) {
        e.preventDefault()
        if (APISearch.length >= 3) {
            setAPIValue(APISearch)
        }
    }

    const handleChange = (e) => {
        setAPISearch(e.target.value)
    }

    return(
    <>
        <header>
            <h1>Bibliotek</h1>
            <form onSubmit={handleSearch}>
                <label htmlFor="search">Søk etter bøker:</label>
                <input type="text" id="search" placeholder="James Bond..." onChange={handleChange}></input>
                <input type="submit" value="Søk"></input>
            </form>
        </header>
        <main>
            <Bookcard bookcard={bookcard} />
        </main>
    </>
    )
}

