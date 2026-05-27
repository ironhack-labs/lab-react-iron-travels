
import { useState } from 'react';


export function TravelPlanCard(props) {
    const [currentList, setCurrentList] = useState(props.plan);
    const deleteButton = (id) => {
        const newList = currentList.filter((locationObj) => locationObj.id !== id);
        setCurrentList(newList);
    }
    const [likedList, setLikedList] = useState([]);
    const likeButton = (locationObj) => {
        const alreadyLiked = likedList.filter((likedObj)=>{
            return likedObj.id === locationObj.id
        })
        if(alreadyLiked.length === 0) {
            setLikedList([...likedList, locationObj]);
        } else{
            setLikedList(likedList.filter((likedObj)=> likedObj.id !== locationObj.id))
        }

    }
    return (
        <div className='main-flex'>
            <div className='list'>
                {currentList.map((locationObj) => {
                    return (
                        <div key={locationObj.id} className='location-container'>
                            <img src={locationObj.image} className='image' />
                            <div className='info'>
                                <h3>{locationObj.destination} ({locationObj.days} Days)</h3>
                                <p><em>{locationObj.description}</em></p>
                                <p><strong>Price:</strong> €{locationObj.totalCost}</p>
                                <aside className='label-container'>
                                    {locationObj.totalCost <= 350 && <span className='label great-deal'>Great Deal</span>}
                                    {locationObj.totalCost >= 1500 && <span className='label premium'>Premium</span>}
                                    {locationObj.allInclusive && <span className='label all-inclusive'>All-Inclusive</span>}
                                </aside>
                                <button onClick={() => { deleteButton(locationObj.id) }} className='delete-button'>Delete</button>
                                {/* create a button with a function that adds a key liked:true */}
                                <button onClick={() => { likeButton(locationObj), console.log(likedList); }}>Liked</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='favs'>
                <h3>Favourites</h3>
                {likedList.map((favLocationObj) => {
                    return (
                        <div className="favs-container">
                            <div className='card'>
                                <img src={favLocationObj.image} className='favs-image' />
                                <div className="card-info">
                                <h3>{favLocationObj.destination} ({favLocationObj.days} Days)</h3>
                                <h3>€{favLocationObj.totalCost}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}