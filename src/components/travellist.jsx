import "../assets/travellist.css"
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./travelplancard.jsx";
import FavoritePlanCard from "./favoriteplancard.jsx";
import { useState } from "react";

const TravelList = () => {

  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favoritePlans, setFavoritePlans] = useState([]);

  const addFavoritePlan = (plan) => {
    setFavoritePlans([...favoritePlans, plan]);
    doDelete(plan.id);
  }
  
  const doDelete = (planId) => {
       const filteredlist = travelPlans.filter((card) => {return card.id !== planId});
       setTravelPlans(filteredlist);
    }
   

    return (
      <div className="content">
        <div>
        {travelPlans.map((oneplan)=> {
            return(
                <div key={oneplan.id} >
                    <TravelPlanCard plan={oneplan} doDelete={doDelete} addFavoritePlan={addFavoritePlan} />
                    <br />
                </div>
            )

        })
        }
        </div>

        <div>
        {favoritePlans.map((oneplan)=> {
            return(
                <div key={oneplan.id} >
                    <FavoritePlanCard plan={oneplan} />
                    <br />
                </div>
            )

        })
        }
        </div>

      </div>
    );
  };
   
export default TravelList;

