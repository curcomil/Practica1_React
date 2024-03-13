function KoderCArd (props) {
    return (
        <>
            <article className="cards">
                <h2>{props.emoji}</h2>
                <h2>{props.name}</h2>
                <p>{props.city}</p>
            </article>
        </>
    )
}

export default KoderCArd