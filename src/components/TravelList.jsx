export const TravelList = ({travelList, setTravelListState}) => {

  return (
    <div>
        {travelList.map((oneTrip) => {
            return (
            <div className="trip-boxes" key={oneTrip.id}>
            <img src={oneTrip.image}/>
            <h6>{oneTrip.destination} ({oneTrip.days} days)</h6>
            <p>{oneTrip.description}</p>
            <p>Price {oneTrip.parts.cost}€ </p>
            </div>
        )
        })}
    </div>
  )
}