import { useState } from "react";
// Importação dos dados JSON
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  // Iteração 1: Definir o estado com os dados iniciais
  const [plans, setPlans] = useState(travelPlansData);
  
  // --- ADICIONADO PARA ITERAÇÃO 5 ---
  const [favorites, setFavorites] = useState([]);

  // Iteração 3: Função para remover um item da lista
  const deletePlan = (id) => {
    const filteredPlans = plans.filter((plan) => plan.id !== id);
    setPlans(filteredPlans);
  };

  // --- ADICIONADO PARA ITERAÇÃO 5 ---
  const addToFavorites = (plan) => {
    if (!favorites.find(fav => fav.id === plan.id)) {
      setFavorites([...favorites, plan]);
    }
  };

  return (
    // Alterado apenas o estilo do container para permitir a coluna lateral
    <div className="travel-list-container" style={{ padding: "20px", display: "flex", gap: "20px" }}>
      
      {/* Container da Lista Original */}
      <div style={{ flex: 2 }}>
        {plans.map((plan) => (
          <div key={plan.id} className="travel-card" style={cardStyle}>
            
            {/* Imagem do Plano */}
            <img src={plan.image} alt={plan.destination} style={imageStyle} />

            {/* Conteúdo do Plano */}
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: "0 0 10px 0" }}>
                {plan.destination} ({plan.days} Days)
              </h2>
              <p style={{ color: "#555", fontSize: "0.9rem" }}>{plan.description}</p>
              <p><strong>Price:</strong> {plan.totalCost} €</p>

              {/* Iteração 2: Renderização Condicional de Etiquetas (Labels) */}
              <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                {plan.totalCost <= 350 && (
                  <span style={labelGreen}>Great Deal</span>
                )}
                
                {plan.totalCost >= 1500 && (
                  <span style={labelBlue}>Premium</span>
                )}

                {plan.allInclusive && (
                  <span style={labelBlue}>All-inclusive</span>
                )}
              </div>

              {/* Iteração 3: Botão de Eliminar */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button 
                  onClick={() => deletePlan(plan.id)}
                  style={deleteBtnStyle}
                >
                  Delete
                </button>

                {/* --- ADICIONADO PARA ITERAÇÃO 5 --- */}
                <button 
                  onClick={() => addToFavorites(plan)}
                  style={deleteBtnStyle}
                >
                  ♡
                </button>
              </div>
            </div>
          </div>
        ))}
        {plans.length === 0 && <p>No travel plans left to show.</p>}
      </div>

      {/* --- ADICIONADO PARA ITERAÇÃO 5: COLUNA DE FAVORITOS --- */}
      <div style={{ flex: 1, border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
        <h2>Favorites</h2>
        {favorites.map(fav => (
          <div key={fav.id} style={{ marginBottom: "10px", textAlign: "center" }}>
            <img src={fav.image} alt={fav.destination} style={{ width: "100%", borderRadius: "4px" }} />
            <p><strong>{fav.destination}</strong></p>
            <p>{fav.totalCost} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Estilos Originais Mantidos ---
const cardStyle = {
  display: "flex",
  gap: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "15px",
  marginBottom: "20px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  maxWidth: "800px",
  margin: "15px auto"
};

const imageStyle = {
  width: "280px",
  height: "180px",
  objectFit: "cover",
  borderRadius: "4px"
};

const labelGreen = {
  backgroundColor: "#3fb871",
  color: "white",
  padding: "4px 10px",
  borderRadius: "4px",
  fontSize: "0.8rem",
  fontWeight: "bold"
};

const labelBlue = {
  backgroundColor: "#2e61a5",
  color: "white",
  padding: "4px 10px",
  borderRadius: "4px",
  fontSize: "0.8rem",
  fontWeight: "bold"
};

const deleteBtnStyle = {
  marginTop: "15px",
  padding: "6px 15px",
  backgroundColor: "#e0e0e0",
  border: "1px solid #ccc",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.9rem"
};

export default TravelList;
