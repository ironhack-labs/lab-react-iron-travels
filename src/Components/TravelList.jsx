import travelPlansData from "../assets/travel-plans.json";
import { useState } from 'react';
import TravelPlanCard from "./TravelPlanCard";

function TravelList(){

    const [plans, setPlan] = useState([...travelPlansData]);
    const [favPlans, setFavPlans] = useState([]);


    function handleDelete(index){
        const filteredPlans = plans.filter((element) => {
        return element.id !== index;
        });

        setPlan(filteredPlans);
    }

    function handleFavorite(index) {
  // Check if already in favorites
    const alreadyFavorited = favPlans.some((el) => el.id === index);
    if (alreadyFavorited) return;

    const favorite = plans.find((el) => el.id === index); // find is better than filter here
    setFavPlans([...favPlans, favorite]);
    }

    return(
        <>
        <ul>
            {plans.map((element) => (
                <li key={element.id}>
                    <h2>{element.destination}<span>{element.days} Days</span></h2>
                    <img src={element.image} alt={element.destination} width={350}/>
                    <p>{element.description}</p>
                    <h2>Price: {element.totalCost}</h2>
                    {element.allInclusive && <button type='button'>All-Inclusive</button>}
                    {element.totalCost > 350 ? 
                        <button type='button'>Premium</button> :
                        <button type='button'>Great Deal</button>
                    }
                    <button type='button' onClick={() => handleDelete(element.id)}>Delete</button>
                    <button type='button' onClick={() => handleFavorite(element.id)}>🩶</button>
                </li>
            ))}
        </ul>
        <h1>Favorites ❤️</h1>
        <TravelPlanCard favPlans={favPlans} />
        </>
    );
}

export default TravelList