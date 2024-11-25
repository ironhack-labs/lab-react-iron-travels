function TravelFavorites({ favs }) {
    return (
        <div className="container ">
            <h2>Favorites</h2>
            {favs.map((f) => (
                <div className="mb-3 border border-black" key={f.id}>
                    <img src={f.image} width="250px" alt={f.destination} />
                    <h3 className="mt-2 fs-6">{f.destination} ({f.days} Days)</h3>
                    <p>{f.totalCost} €</p>
                </div>
            ))}
        </div>
    );
}

export default TravelFavorites;
