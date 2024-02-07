/* import TravelList from "./TravelList"; */

function TravelPlanCard(props) {
    const {location, removeItem, deal} = props;


        return (
          <div
            key={location.id}
            style={{ display: "flex", flexDirection: "row", border: "1px solid black" }}
          >
            <img src={location.image} height={150} width={250} />
            <div>
              <h3>{location.destination}</h3>
              <p>{location.description}</p>
              <p>Price: ${location.totalCost}</p>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p>{deal(location.totalCost)}</p>
                <p>{location.allInclusive && "All Inclusive"}</p>
              </div>
              <button onClick={() => removeItem(location.id)}>Delete Trip</button>
            </div>
          </div>
        );
        }


export default TravelPlanCard;