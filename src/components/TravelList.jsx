import travelPlansData from "../assets/travel-plans.json";

function TravelList(){

    const [travelPlansToDisplay, settravelPlansToDisplay] = useState(travelPlansData);


    
    return(
        <section className="TravelList">

            {travelPlansToDisplay.map( (travelPlanDetails) => {
                return(
                    <div key={travelPlanDetails.id} className="travel plans">
                        <h2>{travelPlanDetails.destination}</h2>

                        <p> {travelPlanDetails.description}</p>
                        <p>Price : {travelPlanDetails.totalCost}</p>
                       
                    </div>
                );
            })}

        </section>
    );
}

export default TravelList;