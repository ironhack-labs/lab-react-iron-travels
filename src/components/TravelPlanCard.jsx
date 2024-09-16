import { useState } from "react";

export default function TravelPlanCard(props) {
    return (
        <div className="TravelList-Plan">
            <p><b>Parts :</b></p>
            {props.plan.map((element) => {
                return <p><i>{element.name}</i> {element.description}</p>
            })}
        </div>
    )
}