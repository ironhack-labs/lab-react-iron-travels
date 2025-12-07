import { useState } from "react";

function TravelPlanCard({ plan, deleteTravel, favTravel }) {

    const buttonFav = ["secondary", "purple", "blue", "green", "yellow", "orange", "red"];
    const [color, setColor] = useState(0);

    function colorRandom () {
        const indexColor = Math.floor(Math.random() * buttonFav.length);
        setColor(indexColor);
    }

    return (
        <div className="d-flex border my-3">
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

                    { plan.totalCost <= 350 && 
                        (<h6 className="d-flex justify-content-start p-0">
                            <span className="badge text-bg-success text-black">Great Deal</span></h6>)}

                    { plan.totalCost >= 1500 && 
                        (<h6 className="d-flex justify-content-start p-0">
                            <span className="badge text-bg-primary">Premiun</span></h6>)}

                    { plan.allInclusive && 
                        (<h6 className="d-flex justify-content-start p-0">
                            <span className="badge text-bg-primary">All-Inclusive</span></h6>)}

                    <div className="d-flex justify-content-between align-items-center py-3 pe-3">
                        <button 
                            className="btn btn-secondary"
                            onClick={ () => deleteTravel(plan.id) } >Delete</button>

                        <button 
                            className="btn btn-secondary"
                            onClick={ () => { 
                                colorRandom();
                                favTravel(plan);
                            } }
                            style={{ backgroundColor: buttonFav[color] }}>♡</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default TravelPlanCard;