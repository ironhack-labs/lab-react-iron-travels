import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList ";

export default function App() {
  return (
    <div>
       <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList />
    </div>
  );
}
