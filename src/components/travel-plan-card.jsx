
function TravelPlanCard({ plan, deleteTravel }) {
    return (
        <div className="d-flex border my-3 mx-5 ">
                    {
                        <img src={ plan.image } 
                            className="rounded m-3 d-flex justify-content-start" 
                            style={{ width:'280px', height:'210px' }}/>
                    }
                    {
                        <div>
                            <p className="d-flex mt-3 fw-bold fs-5"> { plan.destination } { `(${ plan.days } Days)` }  </p>
                            <p className="d-flex fs-6 fw-light fst-italic"> { plan.description } </p>
                            <p className="d-flex fs-6"> <strong className="me-1">Price:  </strong> { `${ plan.totalCost } €` } </p>
                            {plan.totalCost <= 350 && 
                                (<h6 className="d-flex justify-content-start p-0">
                                    <span className="badge text-bg-success text-black">Great Deal</span></h6>)}
                            {plan.totalCost >= 1500 && 
                                (<h6 className="d-flex justify-content-start p-0">
                                    <span className="badge text-bg-primary">Premiun</span></h6>)}
                            {plan.allInclusive && 
                                (<h6 className="d-flex justify-content-start p-0">
                                    <span className="badge text-bg-primary">All-Inclusive</span></h6>)}
                            <button
                                onClick={ () => deleteTravel(plan.id) } 
                                type="button" 
                                className="btn btn-secondary btn-sm d-flex justify-content-start mt-3">Delete</button>
                        </div>
                    }
                </div>
    );
}

export default TravelPlanCard;