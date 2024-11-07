import React, { useState } from 'react';
import travelPlans from './../../assets/travel-plans.json';


const getCostLabel = (cost) => {
    if (cost <= 350) return 'Great Deal';
    if (cost >= 1500) return 'Premium';
    return '';
};

const getAllInclusiveLabel = (allInclusive) => (allInclusive ? 'All Inclusive' : '');

function TravelList() {

    const [travelPlansState, setTravelPlans] = useState(travelPlans);


    const handleDelete = (id) => {
        const updatedTravelPlans = travelPlansState.filter((viaje) => viaje.id !== id);
        setTravelPlans(updatedTravelPlans);
    };

    return (
        <div>
            <h1>Planes de Viaje de Iron Travels</h1>
            <div className="travel-list">
                {travelPlansState.map((viaje) => {
                    const costLabel = getCostLabel(viaje.totalCost);
                    const allInclusiveLabel = getAllInclusiveLabel(viaje.allInclusive);

                    return (
                        <div key={viaje.id} className="travel-item">
                            <img src={viaje.image} alt={viaje.destination} />
                            <h2>{viaje.destination}</h2>
                            <p>{viaje.description}</p>
                            <p><strong>Duración: </strong>{viaje.days} días</p>
                            <p><strong>Costo Total: </strong>${viaje.totalCost}</p>


                            <p>
                                <strong>Etiquetas: </strong>
                                {costLabel && <span className="label">{costLabel}</span>}
                                {allInclusiveLabel && <span className="label">{allInclusiveLabel}</span>}
                            </p>

                            <h3>Partes del viaje:</h3>
                            <ul>
                                {viaje.parts.map((parte, index) => (
                                    <li key={index}>
                                        <strong>{parte.name}</strong>: {parte.description} - ${parte.cost}
                                    </li>
                                ))}
                            </ul>


                            <button onClick={() => handleDelete(viaje.id)} className="delete-button">
                                Eliminar
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TravelList;
