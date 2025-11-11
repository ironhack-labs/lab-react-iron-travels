import { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";
import logo from "../assets/logo.png";
import TravelPlanCard from "./TravelPlanCard";


function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);
    const [favorites, setFavorites] = useState([]);
    const [favoriteColors, setFavoriteColors] = useState({});

    const handleDelete = (id) => {
        setTravelPlans(currentPlans => currentPlans.filter(plan => plan.id !== id));
        // Also remove from favorites if it was favorited
        setFavorites(currentFavorites => currentFavorites.filter(plan => plan.id !== id));
    };

    const handleToggleFavorite = (id) => {
        const plan = travelPlans.find(plan => plan.id === id);
        
        setFavorites(currentFavorites => {
            const isCurrentlyFavorite = currentFavorites.some(fav => fav.id === id);
            
            if (isCurrentlyFavorite) {
                // Remove from favorites
                return currentFavorites.filter(fav => fav.id !== id);
            } else {
                // Add to favorites and set random color
                const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                
                setFavoriteColors(currentColors => ({
                    ...currentColors,
                    [id]: randomColor
                }));
                
                return [...currentFavorites, plan];
            }
        });
    };

    const isFavorite = (id) => {
        return favorites.some(fav => fav.id === id);
    };

    return (
        <div className="travel-list">
            <header className="header">
                <img src={logo} alt="Iron Travels Logo" className="logo" />
                <h1>Iron Travels</h1>
                <p>Tailored Travel Plans for Ironhackers</p>
            </header>
            
            <div className="main-content">
                {/* All Travel Plans Section */}
                <section className="travel-section">
                    <h2 className="section-title">All Travel Plans</h2>
                    <div className="travel-cards-container">
                        {travelPlans.map((plan) => (
                            <TravelPlanCard
                                key={plan.id}
                                plan={plan}
                                onDelete={handleDelete}
                                onToggleFavorite={handleToggleFavorite}
                                isFavorite={isFavorite(plan.id)}
                                favoriteColor={favoriteColors[plan.id]}
                            />
                        ))}
                    </div>
                    
                    {travelPlans.length === 0 && (
                        <div className="empty-state">
                            <h2>No travel plans available</h2>
                            <p>All trips have been deleted. Refresh the page to see them again.</p>
                        </div>
                    )}
                </section>

                {/* Favorites Section */}
                <section className="favorites-section">
                    <h2 className="section-title">Favorites</h2>
                    <div className="favorites-container">
                        {favorites.map((favorite) => (
                            <TravelPlanCard
                                key={favorite.id}
                                plan={favorite}
                                onDelete={handleDelete}
                                onToggleFavorite={handleToggleFavorite}
                                isFavorite={true}
                                favoriteColor={favoriteColors[favorite.id]}
                            />
                        ))}
                    </div>
                    
                    {favorites.length === 0 && (
                        <div className="empty-favorites">
                            <h3>No favorites yet</h3>
                            <p>Click the heart button to add trips to your favorites!</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default TravelList;