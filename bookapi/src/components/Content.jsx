export default function Content({content}){

    return(
        <>
        {content?.map (element =>
        <article key={element.key}>
            <h2>{element.title}</h2>
            <p>{element.subtitle}</p>
            {element.isbn && (
                <img src={`https://covers.openlibrary.org/b/isbn${element.isbn[0]}-M.jpg`} alt={element.title} />
            )}
        </article>
        )}
        </>
    )



}

