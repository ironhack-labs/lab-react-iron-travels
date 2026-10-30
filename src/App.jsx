import logo from "./assets/logo.png";
import TravelList from "./components/TravelList";
import "./App.css";

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <img src={logo} className="logo" alt="Iron Travels" />
        <p className="eyebrow">YOUR NEXT ADVENTURE STARTS HERE</p>
        <h1 className="text-iron">Iron Travels</h1>
        <p className="subtitle">Tailored travel plans for Ironhackers</p>
      </header>
      <TravelList />
    </main>
  );
}

export default App;
