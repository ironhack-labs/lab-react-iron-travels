import { useState } from "react";
import FiltersBar from "./FiltersBar";
import ExperienceList from "./ExperienceList";
import Favorites from "./Favorites";
import { experiences as initialExperiences } from "../data";
export default function ResultsList() {
  const [favorites, setFavorites] = useState([]);
  const [view, setView] = useState("all");
  const [experiences, setExperiences] = useState(initialExperiences);
  const [, setFilters] = useState({ sort: "price", airline: "all", stops: "all" });

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleDeleteExperience = (id) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
    setFavorites((prev) => prev.filter((fid) => fid !== id));
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <div style={{display:'flex',gap:'1.5rem',margin:'2rem 0 1.5rem 0'}}>
        <button onClick={() => setView("all")}
          style={{background:view==="all"?'#a88c4a':'#fff',color:view==="all"?'#fff':'#a88c4a',border:'1px solid #a88c4a',borderRadius:'1.2rem',padding:'0.5rem 1.2rem',fontWeight:600,cursor:'pointer'}}>All Experiences</button>
        <button onClick={() => setView("favorites")}
          style={{background:view==="favorites"?'#a88c4a':'#fff',color:view==="favorites"?'#fff':'#a88c4a',border:'1px solid #a88c4a',borderRadius:'1.2rem',padding:'0.5rem 1.2rem',fontWeight:600,cursor:'pointer'}}>Favorites</button>
      </div>
      {view === "all" && <>
        <FiltersBar onChange={handleFilterChange} />
        <ExperienceList
          experiences={experiences}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onDelete={handleDeleteExperience}
        />
      </>}
      {view === "favorites" && (
        <Favorites
          experiences={experiences}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}
