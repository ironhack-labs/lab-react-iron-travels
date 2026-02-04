

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import ResultsList from "./components/ResultsList";
import RecentSearches from "./components/RecentSearches";



const mockRecent = [
  { route: "São Paulo (SAO) → Madrid (MAD)", date: "16 Apr", passengers: "3 adults" },
  { route: "São Paulo (SAO) → Lisbon (LIS)", date: "17 Apr", passengers: "3 adults" },
  { route: "Campinas (VCP) → Lisbon (LIS)", date: "16 Apr", passengers: "2 adults" },
];

function App() {
  return (
    <div className="goldmonkey-journeys">
      <Header />
      <Hero />
      <SearchBar />
      <RecentSearches searches={mockRecent} />
      <ResultsList />
      <Footer />
    </div>
  );
}

export default App;
