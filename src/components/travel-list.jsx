import travelPlansData from "../assets/travel-plans.json";

function TravelList () {

    return (
        <div className="container">
            {travelPlansData.map((data) => (
                <div className="d-flex border my-3 mx-5 " key={data.id}>
                    {
                        <img src={ data.image } 
                            className="rounded m-3 d-flex justify-content-start" 
                            style={{ width:'280px', height:'190px' }}/>
                    }
                    {
                        <div>
                            <p className="d-flex mt-3 fw-bold fs-5"> { data.destination } { `(${ data.days } Days)` }  </p>
                            <p className="d-flex fs-6 fw-light fst-italic"> { data.description } </p>
                            <p className="d-flex fs-6"> <strong className="me-1">Price:  </strong> { `${ data.totalCost } €` } </p>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default TravelList;