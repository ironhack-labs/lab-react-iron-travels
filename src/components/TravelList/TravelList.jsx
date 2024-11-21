import React from "react";

const TravelList = ({ travelPlans }) => {
    return (
        <>
            {travelPlans.map((travelInfo, index) => (
                <div className="TravelCard" key={index}>
                    <h3>{travelInfo.destination} ({travelInfo.days} Days)</h3>
                    <p>{travelInfo.description}</p>
                    <p>Price: {travelInfo.totalCost} €</p>
                    {travelInfo.cost <= 350 && <p>Great Deal</p>}
                    {travelInfo.cost >= 1500 && <p>Premium</p>}
                    {travelInfo.allInclusive && <p>All Inclusive</p>}
                </div>
            ))}
        </>
    )
};

export default TravelList;