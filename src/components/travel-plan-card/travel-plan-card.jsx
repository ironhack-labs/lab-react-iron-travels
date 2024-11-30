import Label from "../ui/label/label";
import Panel from "../ui/panel/panel";

function TravelPlanCard( { plan, onDelete, onFavorite }) {
    const { id, image, destination, description, days, totalCost, allInclusive } = plan;
    return (
        <Panel >
                <img className="w-50 img-fluid object-fit-cover" style={{height: "300px"}} src={image} alt={plan.destination} />
                <div className="d-flex flex-column gap-1">
                    <h2 className="fs-4"> {destination} ({days} Days)</h2>
                    <p>{description}</p>
                    <p><strong>Price: </strong> {totalCost}€</p>
                    
                    {/*Labels based on the cost*/}
                    <div className="d-flex gap-2 flex-grow-1">
                        {totalCost <= 350 && ( <Label type="Great Deal"/>)}
                        {totalCost >= 1500 && (<Label type ="Premium"/>)}
                        {allInclusive && (<Label type="All Inclusive"/>)}
                    </div>
                    
                    <div className="d-flex justify-content-between">
                        <button  className="btn btn-secondary btn-sm w-25 text-black" onClick={() => onDelete(id)}>Delete</button>
                        <button className="btn btn-secondary btn-sm w-25 text-black" onClick={() => onFavorite(id)}>♡</button>
                    </div>
                    
                    
                    
                </div>
        </Panel>
    )
}

export default TravelPlanCard;