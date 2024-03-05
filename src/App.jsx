 src/App.jsx
@@ -1,5 +1,6 @@
import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";

function App() {
  return (
@@ -10,8 +11,7 @@ function App() {
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}

      <TravelList />
    </>
  );
}