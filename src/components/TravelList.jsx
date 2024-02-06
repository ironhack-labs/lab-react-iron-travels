import travels from "../assets/travel-plans.json";
import { useState } from "react";
//import "./App.css";
import "../App.css";
import "../index.css";

function TravelList () {
    const [travelsToDisplay, setTravelsToDisplay] = useState(travels);

    let destination = "";
    if(travelsToDisplay.length > 0){
        destination = <h2>Number of travels: {travelsToDisplay.length}</h2>;
    } else {
        destination = <h2>Sorry, no travels to display</h2>
    }

    const deletetravel = (travelId) => {
        const newList = travelsToDisplay.filter((travelObj) => {
            return travelObj.id !== travelId;
        });
        setTravelsToDisplay(newList);
    }
    return(
        <section className="TravelList">
            {destination}
            {travelsToDisplay.map( (travelDetails) => {
                return(
                    <div key={travelDetails.id} className="travel card">
                        <h2>destination: {travelDetails.destination}</h2>

                        {travelDetails.image 
                            ? <img src={travelDetails.image} /> 
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        }

                        <p> {travelDetails.description}</p>
                        Price : {travelDetails.parts['costs'] }
                        <button onClick={() => {deletetravel(travelDetails.id)}}>Delete</button>
                    </div>
                );
            })}

        </section>
    );
}

export default TravelList ;
