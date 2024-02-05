import {useState} from 'react';

function TravelList (prop) {

    const [premium, setPremium] = useState(false);
    const [allInc, setAllInc] = useState(false);
    const [greatDeal, setGreatDeal] = useState(false);

    if (prop.trip.totalCost >= 1500) setPremium(true);
    if (prop.trip.totalCost <= 350) setAllInc(true);
    if (prop.trip.allInclusive) setAllInc(true);


    return(

        <div className="TravelList">
            <img src={prop.trip.image} />
            <div className="info">
                <h3>{prop.trip.destination} &#40;{prop.trip.days} Days&#41;</h3>
                <p><em>{prop.trip.description}</em></p>
                <p><b>Price:</b> {prop.trip.totalCost} €</p>

                {premium ? <button>All-Inclusive</button>:<p>no</p>}
                {greatDeal ? <button>Great Deal</button>:<p>no</p>}
                {allInc ? <button>All-Inclusive</button>:<p>no</p>}

            </div>



            
        </div>
    )
}

export default TravelList;