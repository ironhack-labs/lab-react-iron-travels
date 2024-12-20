import Travellist from "./Travellist";
function TravelPlanCard({plan}){

    return(<div>
        <h1>Travel Plan Card</h1>
        <Travellist data={plan}/>
    </div>)
}
export default TravelPlanCard;