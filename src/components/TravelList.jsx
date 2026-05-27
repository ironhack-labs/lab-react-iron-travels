import travelPlansData from '../assets/travel-plans.json'


export const TravelList = () => {
    return (
        <div className="travel-list">
            {console.log(travelPlansData)}
            {travelPlansData.map((destination)=> {
                return (
                    <div key={destination.id} className="destination-component">
                        <img src={destination.image} alt="" />
                        <div id="destination-details">
                            <h3>{destination.destination} ({destination.days} Days)</h3>
                            <p>{destination.description}</p>
                            <p>Price: {destination.totalCost}€</p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}