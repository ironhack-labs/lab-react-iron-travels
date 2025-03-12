import { useState } from "react";


export const TravelPlanCard = (props) => {
    const [plan, setPlan] = useState(props.plan);
    // console.log(props);
    function handleDelete(id) {
        props.delete(id);
    }

    function handleFav(id) {
        props.addFav(id);
    }
  return (
    <article id={plan.id} className="card">
        <div className="card-image-container">
            <img src={plan.image} alt={plan.destination} className="card-image"/>
        </div>
        <div className="card-text-container">
            <h3 className="card-title">{plan.destination} ({plan.days} Days)</h3>
            <p>{plan.description}</p>
            <p><span className="bold">Price: </span>{plan.totalCost} €</p>
            <div className="card-label-container">
                {plan.totalCost <= 350 && <span className="label label-green">Great Deal</span>}
                {plan.totalCost >= 1500 && <span className="label label-blue">Premium</span>}
                {plan.allInclusive && <span className="label">All Inclusive</span>}
            </div>
            <div className="card-action-container">
                <button className="btn btn-danger" onClick={()=>{handleDelete(plan.id)}}>Delete</button>
                <button className={"btn btn-fav "+props.bgColorFavBtn} onClick={()=>{handleFav(plan.id)}}>
                ♡
                </button>
            </div>
        </div>
    </article>
  )
}
