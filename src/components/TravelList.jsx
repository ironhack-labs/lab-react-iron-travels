
import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from 'react';


function TravelList() {

    const [list, setList] = useState(travelPlansData);

    const handleDelete = (index) => {
        const clone = list.slice(0)
        clone.splice(index, 1);
        setList(clone);
    }


    const listIndex = list.map((element, index) =>
        <div className='country' key={index}>
            <img className='img-country' src={element.image}></img>
            <div className="text">
                <h1>{element.destination} ({element.days}Days)</h1>
                <p className="smallText">{element.description}</p>
                <p className="smallText"><b>Price:</b>{element.totalCost} €</p>
                <div>
                    {element.totalCost <= 350 ? (
                        <button className="great"><b>Great Deal</b></button>
                    ) : (null)}
                    {element.totalCost >= 1500 ? (
                        <button className="premium"><b>Premium</b></button>
                    ) : (null)}
                    {element.allInclusive === true ? (
                        <button className="all-inclusive"><b>All Inclusive</b></button>
                    ) : (null)}
                </div>
                <br />
                <button className="delete" onClick={() => handleDelete(index)}><b>Delete</b></button>
            </div>
        </div>
    );
    return (
        <section >
            {listIndex}
        </section>
    )
}

export default TravelList