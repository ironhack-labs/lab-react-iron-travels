import { constCondition, inclusiveCondition } from "./LabelGenerator";

const TravelPlanCard = ({ destination, removeDestination, addToFavorites }) => {
    return (
      <div key={destination.id} className="travel-card">
        <img src={destination.image} alt='destination' />
        <div className="travel-details">

        <h2> {destination.destination} ({destination.days} Days) </h2>
        <i>{destination.description}</i>
        <p><strong>Price:</strong> {destination.totalCost} €</p>
        <p>{constCondition(destination.totalCost)} {inclusiveCondition(destination.allInclusive)}</p>
        </div>

        <div className="travel-buttons">

          <button onClick={() => removeDestination(destination.id)} className="destination-buttons">Delete</button>
          <button onClick={() => addToFavorites(destination.id)} className="destination-buttons">♡</button>
        </div>
      </div>
    );
  };
  
  export default TravelPlanCard;