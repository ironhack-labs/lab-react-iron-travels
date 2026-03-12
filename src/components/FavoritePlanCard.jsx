import Label from "./Label";

function FavoritePlanCard (props) {
    return (
        <div className="favorite-travel-plan" key={props.travelPlanData.id}>
            <div className="travel-plan-child">
                <img src={props.travelPlanData.image} alt={props.travelPlanData.destination + " destination picture"} />
            </div>

            <div className="travel-plan-child ">
                <h2>{props.travelPlanData.destination} ({props.travelPlanData.days} days)</h2>
                <p><strong>Price:</strong> {props.travelPlanData.totalCost} €</p>
            </div>
        </div>
    )
}

export default FavoritePlanCard;