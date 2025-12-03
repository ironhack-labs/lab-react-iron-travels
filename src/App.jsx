import React from "react";
import TravelList from "./components/TravelList";
import logo from "./assets/logo.png"; // Importamos el logo

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Logo arriba */}
      <img src={logo} alt="Logo" style={{ width: "100px", marginBottom: "20px" }} />
      <h1>React Iron Travels</h1>
      <TravelList />
    </div>
  );
}

export default App;
