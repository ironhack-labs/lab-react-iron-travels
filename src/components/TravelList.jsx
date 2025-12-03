import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    return (
        <>
            {travelPlansData.map( (elm) => {
                return (
                    <div className="card">
                        <p>{elm.destination}</p>
                        <p>{elm.days}</p>
                        <p>{elm.description}</p>
                        
                    </div>
                )
            })}
        </>
    )
}

export default TravelList