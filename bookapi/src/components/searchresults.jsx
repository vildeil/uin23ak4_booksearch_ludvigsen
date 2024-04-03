import Content from "./Content"

export default function Searchresults({content}){

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    return(
    <>
        <header>
            <h1>Bøker</h1>
            <form>
                <label htmlFor="search">Søk etter bøker:</label>
                <input type="text" id="search" placeholder="James Bond..."></input>
                <input type="submit" value="Søk"></input>
            </form>
        </header>
        <main>
            <Content content={content} />
        </main>
    </>
    )
}

