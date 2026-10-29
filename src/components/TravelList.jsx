import React, { useState } from 'react'; // 1. Corrigido: Importar o useState
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {
    // Iniciamos o estado com os dados do JSON
    const [destinations, setDestination] = useState(travelPlansData);

    // 2. Corrigido: A função agora recebe o ID específico do plano a apagar
    const deleteDestination = (id) => {
        const filteredDestination = destinations.filter(location => {
            return location.id !== id; // Mantém apenas os que têm ID diferente do que foi clicado
        });
        setDestination(filteredDestination);
    };
   
  return (
    <div className="travelList">
      {/* 3. Corrigido: Mapear o 'destinations' (estado) e não o JSON estático */}
      {destinations.map((plan) => (
        <div className="travelTainer" key={plan.id}> 
          <img className="destinationPhotos" src={plan.image} alt="photo" />
          <h2>{plan.destination}</h2>
          <h3>{plan.title}</h3>
          <p>{plan.description}</p>
          
          {plan.totalCost >= 1500 && <p>Premium</p>}
          {/* Dica do passo anterior: Podes mudar para 350 se quiseres ver o Great Deal neste lab */}
          {plan.totalCost <= 350 && <p>Great Deal</p>}
          {plan.allInclusive && <p>All Inclusive</p>}
          
          {/* 4. Corrigido: Passar o ID do plano atual através de uma arrow function */}
          <button onClick={() => deleteDestination(plan.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

