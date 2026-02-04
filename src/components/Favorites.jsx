import ExperienceList from "./ExperienceList";

export default function Favorites({ experiences, favorites, onToggleFavorite }) {
  const favExperiences = experiences.filter(exp => favorites.includes(exp.id));
  return (
    <section style={{maxWidth:900,margin:"2.5rem auto 2rem auto"}}>
      <h2 style={{fontSize:'1.3rem',marginBottom:'1.2rem'}}>Favorites</h2>
      <ExperienceList experiences={favExperiences} favorites={favorites} onToggleFavorite={onToggleFavorite} />
      {favExperiences.length === 0 && (
        <div style={{textAlign:'center',color:'#bbb',margin:'2rem 0'}}>No favorites yet</div>
      )}
    </section>
  );
}
