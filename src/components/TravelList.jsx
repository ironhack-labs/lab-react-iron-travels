import travelPlansData from "../assets/travel-plans.json";
import { useState } from 'react';


function TravelList() {
    const [travelPlansDataToDisplay, setTravelPlansDataToDisplay] = useState(travelPlansData);

    const deleteVacation = (vacationId) => {
        const newList = travelPlansDataToDisplay.filter((element) => {
            return vacationId !== element.id;
        })

        setTravelPlansDataToDisplay(newList);
    };


    return (
        <section className="TravelList">
            {travelPlansDataToDisplay.map((travelDetails) => {
                return (

                    <div key={travelDetails.id} className="card">
                        <img src={travelDetails.image} alt="Travel image" />
                        <h3>{travelDetails.destination}</h3><p>(Days {travelDetails.days})</p>
                        <p>{travelDetails.description}</p>
                        <p>Price: {travelDetails.totalCost}€</p>

                        {travelDetails.totalCost <= 350 && <label>Great Deal</label>}
                        {travelDetails.totalCost >= 1500 && <label>Premium</label>}                        

                        <p>
                            <button onClick={() => { deleteVacation(travelDetails.id) }}>Delete</button>
                        </p>
                    </div>
                )
            })}

        </section>
    )
}

export default TravelList;