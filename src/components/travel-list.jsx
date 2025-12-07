
import TravelPlanCard from "./travel-plan-card";

function TravelList ({ dataTravel, deleteTravel, favTravel}) {

    return (
        <div className="container">
            {dataTravel.map((plan) => (
                < TravelPlanCard plan={ plan } key={ plan.id } deleteTravel={ deleteTravel } favTravel={ favTravel }/>
            ))}
        </div>
    );
}

export default TravelList;