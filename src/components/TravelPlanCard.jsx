export default function TravelPlanCard(plan){
    const {travelData} = plan
    return(
        <div>
             <img src={travelData.image} />
                        <h2>{travelData.destination} {travelData.days}</h2>
                        <p>{travelData.description}</p>
                        <p>Price: {travelData.totalCost}</p>

                        {travelData.allInclusive && (
                            <span className="allInclusive-tag">All-Inclusive</span>
                        )}

                        {travelData.totalCost <= 350 && (
                            <span className="greatDeal-tag">Great Deal</span>
                        )}

                        {travelData.totalCost >= 1500 && (
                            <span className="premium-tag">Premium</span>
                        )}
        </div>
    )
}