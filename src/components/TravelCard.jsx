import { DeleteButton } from "./DeleteButton";
import { Labels } from "./Labels";

export const TravelCard = ({ travelPlan, travelData, setTravelData }) => {
  return (
    <div id="travel-card">
      <div>
        <img src={travelPlan.image} alt="img of travel location" />
      </div>
      <div id="card-description">
        <h3>
          {travelPlan.destination} ({travelPlan.days} Days)
        </h3>
        <p>{travelPlan.description}</p>
        <p>Price: {travelPlan.totalCost} €</p>
        <Labels
          travelCost={travelPlan.totalCost}
          allInclusive={travelPlan.allInclusive}
        />
        <DeleteButton
          thisTravelPlan={travelPlan}
          travelData={travelData}
          setTravelData={setTravelData}
        />
      </div>
    </div>
  );
};
