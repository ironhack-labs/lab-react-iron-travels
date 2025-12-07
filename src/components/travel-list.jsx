import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList () {

    const [dataTravel, setDataTravel] = useState(travelPlansData);

    function deleteTravel(id) {
        const dataFilterTravel = dataTravel.filter((travel) => travel.id !== id);
        setDataTravel([...dataFilterTravel]);
    }

    return (
        <div className="container">
            {dataTravel.map((data) => (
                <div className="d-flex border my-3 mx-5 " key={data.id}>
                    {
                        <img src={ data.image } 
                            className="rounded m-3 d-flex justify-content-start" 
                            style={{ width:'280px', height:'210px' }}/>
                    }
                    {
                        <div>
                            <p className="d-flex mt-3 fw-bold fs-5"> { data.destination } { `(${ data.days } Days)` }  </p>
                            <p className="d-flex fs-6 fw-light fst-italic"> { data.description } </p>
                            <p className="d-flex fs-6"> <strong className="me-1">Price:  </strong> { `${ data.totalCost } €` } </p>
                            {data.totalCost <= 350 && 
                                (<h6 className="d-flex justify-content-start p-0">
                                    <span className="badge text-bg-success text-black">Great Deal</span></h6>)}
                            {data.totalCost >= 1500 && 
                                (<h6 className="d-flex justify-content-start p-0">
                                    <span className="badge text-bg-primary">Premiun</span></h6>)}
                            {data.allInclusive && 
                                (<h6 className="d-flex justify-content-start p-0">
                                    <span className="badge text-bg-primary">All-Inclusive</span></h6>)}
                            <button
                                onClick={ () => deleteTravel(data.id) } 
                                type="button" 
                                className="btn btn-secondary btn-sm d-flex justify-content-start mt-3">Delete</button>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default TravelList;