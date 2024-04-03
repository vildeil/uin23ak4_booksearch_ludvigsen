export default function Content({content}){

    return(
        <>
        {content?.map (element =>
        <article key={element.key}>
            <h2>{element.title}</h2>
            {element.isbn && (
                <img src={`https://covers.openlibrary.org/b/isbn/${element.isbn[0]}-M.jpg`}/>
            )}
            <p>Forfatter: {element.author_name}</p>
            <p>Publiserings år: {element.first_publish_year}</p>
            <p>Gjennomsnittlig rating: {element.ratings_average}</p>
            <a href={`https://www.amazon.com/s?k=${element.id_amazon}`}>Kjøp boken her</a>
        </article>
        )}
        </>
    )
}

