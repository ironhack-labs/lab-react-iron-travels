export const TravelList = ({travelList, setTravelListState}) => {
  const handleDelete =() => {
    setTravelListState([]);
  }
  return (
    <div>
        {travelList.map((oneTrip) => {
            return (
            <div className="trip-boxes" key={oneTrip.id}>
            <img src={oneTrip.image}/>
            <div className="trip-text">
            <h4>{oneTrip.destination} ({oneTrip.days} days)</h4>
            <p>{oneTrip.description}</p>
            <p>Price {oneTrip.totalCost} € </p>
            {oneTrip.totalCost <= 350 ? <button className="greatDeal"> Great Deal </button> : null}
            {oneTrip.totalCost >= 1500 ? <button className="premium"> Premium Deal </button> : null}
            <button 
            onClick={(tripId, index)=>{
              return oneTrip.id != tripId ? handleDelete(index) : null
            }
            }>Delete</button>
            </div>
            </div>
        )
        })}
    </div>
  )
}