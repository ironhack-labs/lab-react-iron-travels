import travelPlansData from "../assets/data/travel-plans.json";
import TravelPlanCard from './TravelPlanCard';
import { useState } from 'react';

//nested component
const TravelList = () => {

    const [travelPlans, setTravelPlans] = useState(travelPlansData);
    const handleDelete = (id) => {
        setTravelPlans(travelPlans.filter(travelPlan => travelPlan.id !== id))
    }


    return travelPlans.map(travelPlan => (
            <TravelPlanCard key={travelPlan.id} plan = {travelPlan} handleDelete ={handleDelete} />
          ));
    

}
 
export default TravelList;