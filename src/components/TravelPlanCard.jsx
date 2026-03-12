import Label from "./Label";

function TravelPlanCard (props) {
    console.log("rendering plan...", props.travelPlanData.id)
    return (
        <div className="travel-plan" key={props.travelPlanData.id}>
            <div className="travel-plan-child">
                <img src={props.travelPlanData.image} alt={props.travelPlanData.destination + " destination picture"} />
            </div>

            <div className="travel-plan-child travel-plan-info ">
                <h2>{props.travelPlanData.destination} ({props.travelPlanData.days} days)</h2>
                <p>{props.travelPlanData.description}</p>
                <p><strong>Price:</strong> {props.travelPlanData.totalCost} €</p>
                
                { props.travelPlanData.totalCost <= 350 ? 
                    <Label text="Great Deal" className="green"/> : 
                    <Label text="Premium" className="blue" />
                }

                { props.travelPlanData.allInclusive === true &&
                    <Label text="All-Inclusive" className="blue" />                              
                }
                <br /><br />
                <div className="buttons-container">
                    <button onClick={() => props.deleteCallback(props.travelPlanData.id)}>Delete</button>
                    <button className="favorite-button" onClick={() => props.favoriteCallback(props.travelPlanData.id)}>❤️</button>
                </div>
            </div>
        </div>
    )
}

export default TravelPlanCard;