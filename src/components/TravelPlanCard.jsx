
function TravelPlanCard(props) {

    const { viaje, clickToDelete, changeColor, color} = props;


    return (
        <div key={viaje.id} className="card-container">

            <img src={viaje.image} className="card-image" />

            <div className="info-container">
                <h2 style={{ color: "black" }}>{viaje.destination} ({viaje.days} days)</h2>
                <h3 style={{ color: "gray" }}>{viaje.description}</h3>
                <h3 style={{ color: "gray" }}> Price: {viaje.totalCost} €</h3>

                <div className="labels">
                    {viaje.totalCost <= 350 && <h3 id="deal">Great deal</h3>}
                    {viaje.totalCost >= 350 && <h3 id="premium">Premium</h3>}
                    {viaje.allInclusive === true && <h3 id="all-inclusive">All-Inclusive</h3>}
                </div>

                <div className="buttons">

                    <button onClick={() => clickToDelete(viaje.id)} className="btn-delete">
                        Delete
                    </button>



                    <button onClick={() => changeColor(viaje.id)} style={{ backgroundColor: color }} className="btn-fav">
                        ♡
                    </button>

                </div>


            </div>

        </div>
    )
}

export default TravelPlanCard