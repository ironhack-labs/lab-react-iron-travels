const TravelCard = props => {

    const travel = props.travelInfo
    const deleteTravel = props.deleteTravel

    return (
        <article className="TravelCard">
            <img src={travel.image} alt={travel.name} />
            <section>
                <h3>{travel.destination}</h3>
                <p>Description: {travel.description}</p>
                <p>Price: {travel.price}</p>
                {/* <p>{movie.hasOscars ? 'Tuvo Oscars! 🏆🏆' : 'No tuvo Oscars! 💩💩'}</p> */}

            </section>




            <button className="btn-delete" onClick={() => deleteTravel(travel._id)}>Delete </button>
        </article>
    )
}

export default TravelCard