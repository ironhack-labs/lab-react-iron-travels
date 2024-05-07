import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <div>
      {travelPlans &&
        travelPlans.map((plan) => {
            return (<div>
                <div>
                    <h2>{plan.destination}</h2>
                </div>

                <img src={plan.image} style={{height: "100px"}} alt="" />{" "}
                <div id="costs">{plan.parts[0].cost}  </div>

              {plan.parts[0].cost <= 350 && <div className="greatDeal">GREAT DEAL!</div>}
              {plan.parts[0].cost >= 1500 && <div className="premium">PREMIUM !</div>}
              {plan.allInclusive && <div className="allInclusive">ALL INCLUSIVE !</div>}
              </div>
              )

        })}
    </div>

  );
}

export default TravelList;