import React, { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from './TravelPlanCard'; // Importar el nuevo componente

function TravelList() {
    const [list, setList] = useState(travelPlansData);

    // Función para eliminar un plan de viaje
    const removeCallback = (id) => {
        setList(list.filter(item => item.id !== id)); // Filtra el plan que se va a eliminar
    };

    // Función para alternar el estado de favorito
    const toggleFavorite = (id) => {
        setList(list.map(item => 
            item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
        )); // Alterna el estado de favorito del plan
    };

    return (
        <div className='travel-list'>
            {list.map((item) => (
                <TravelPlanCard 
                    key={item.id} 
                    plan={item} 
                    removeCallback={removeCallback} 
                    toggleFavorite={toggleFavorite} 
                />
            ))}
        </div>
    );
}

export default TravelList;




