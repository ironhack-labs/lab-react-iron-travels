import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [travelData, setTravelData] = useState(travelPlansData);

    const handleDelete = (id) => {
        const updatedTravelData = travelData.filter((item) => item.id !== id); // checkout info about delete buttons - and different way of functions.
        setTravelData(updatedTravelData);
    };

    return (
        <div>
            <div>
                {travelData.map((data) => {
                    return (
                        <div className="travel-card" key={data.id}>
                            <img src={data.image} width={600} height={400} alt={data.destination} />
                            <div className="travel-info">
                                <h2 className="title">{data.destination} ({data.days} days)</h2>
                                <h3><i>{data.description}</i></h3>
                                <h3><b>Price:</b> {data.totalCost}€</h3>
                                <div>
                                    {data.totalCost > 1500 && <span style={{ boxShadow: "0px 2px 5px gray", borderRadius: "10px", marginRight: "10px", padding: "10px", color: "white", backgroundColor: "blue" }}>Premium</span>}
                                    {data.totalCost < 350 && <span style={{ boxShadow: "0px 2px 5px gray", borderRadius: "10px", padding: "10px", color: "white", backgroundColor: "green" }}>Great Deal</span>}
                                    {data.allInclusive && <span style={{ boxShadow: "0px 2px 5px gray", borderRadius: "10px", padding: "10px", color: "white", backgroundColor: "blue" }}> All Inclusive</span>}
                                </div>
                                <button style={{ boxShadow: "0px 2px 5px gray", borderRadius: "10px", marginTop: "20px", padding: "10px", color: "black", backgroundColor: "gray" }} onClick={() => handleDelete(data.id)}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TravelList;
