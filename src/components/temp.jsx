import { useState } from "react";
import movies from "../data/movies.json"


function MovieList() {

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


    const deleteMovie = (movieToDeleteId) => {

        const newList = moviesToDisplay.filter((movie) => {
            if (movie.id !== movieToDeleteId) {
                return true; // keep it
            } else {
                return false; // discard it
            }
        })

        // const newList = moviesToDisplay.filter(movie => movie.id !== movieToDeleteId)

        setMoviesToDisplay(newList);
    }

    return (
        <section className="MovieList">

            <h1>Number of movies: {moviesToDisplay.length}</h1>

            {moviesToDisplay.map((movieObj) => {
                return (
                    <div key={movieObj.id} className="card">
                        <p>{movieObj.title}</p>
                        <p>Year: {movieObj.year}</p>
                        <img src={movieObj.imgURL} alt="Movie Poster" />
                        <p>
                            <button onClick={() => { deleteMovie(movieObj.id) }}>Delete this movie</button>
                        </p>
                    </div>
                )
            })}

        </section>
    )
}

export default MovieList;