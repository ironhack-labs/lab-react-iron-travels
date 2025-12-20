
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "../App.css";

// Este componente es el que muestra todos los viajes. Piensa que aquí es donde se pinta la lista.
function TravelList() {
  // Aquí guardamos los viajes en el estado, así si borramos uno, React lo actualiza solo.
  const [plans, setPlans] = useState(travelPlansData);

  // Esta función se encarga de borrar un viaje cuando le das al botón. Básicamente filtra el que no quieres.
  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="travel-list">
      {/* Aquí recorremos todos los viajes y los pintamos uno a uno. */}
      {plans.map((plan) => (
        <div key={plan.id} className="travel-card">
          {/* Nombre del destino */}
          <h2>{plan.destination}</h2>
          {/* Días del viaje */}
          <p><b>Days:</b> {plan.days}</p>
          {/* Precio total del viaje */}
          <p><b>Cost:</b> {plan.totalCost} €</p>
          {/* Descripción del viaje */}
          <p><b>Description:</b> {plan.description}</p>
          {/* Si el viaje es barato, ponemos la etiqueta de "Great Deal". Si es caro, "Premium". Y si es todo incluido, también lo decimos. */}
          {plan.totalCost <= 350 && <span className="label">Great Deal</span>}
          {plan.totalCost >= 1500 && <span className="label">Premium</span>}
          {plan.allInclusive && <span className="label">All Inclusive</span>}
          {/* Botón para borrar el viaje. Cuando le das, se borra solo ese. */}
          <button onClick={() => handleDelete(plan.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
