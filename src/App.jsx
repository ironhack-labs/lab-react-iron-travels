import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";
import imageLogo from "./assets/logo.png"

function App() {
  return (
    <>
    <header>
    <img src={imageLogo} />
    <h1>Iron Travels</h1>
    <h3>Tailored travel plans for Ironhackers</h3>
    </header>
    
<TravelList />
    </>
  );
}

export default App;
