
import TravelPlanCard from "./travel-plan-card";

function TravelFav ({ dataTravelFav}) {
    return (
        <div className="container">
            {dataTravelFav.map((plan) => (
                <div className="card my-3">
                    {
                        <img src={ plan.image } 
                            className="rounded-top-1 m-0 p-0" 
                            style={{ height:'200px' }}/>
                    }
                    {
                        <div className="fw-bold fs-6">
                            <p className="mt-3 "> { plan.destination } { `(${ plan.days } Days)` }  </p>
                            <p> { `${ plan.totalCost } €` } </p>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default TravelFav;