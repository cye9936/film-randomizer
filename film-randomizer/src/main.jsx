import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from the API
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fca61a665247750053d5685f9d95209e')
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => console.error(`Error: ${error}`));
  }, []);

  // Select a random movie
  const selectRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    setSelectedMovie(movies[randomIndex]);
  }

  return (
    <div className="App">
      <h1>Film Randomizer</h1>
      <button onClick={selectRandomMovie}>Select Random Movie</button>
      {selectedMovie && (
        <div>
          <h2>{selectedMovie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
          <p>{selectedMovie.overview}</p>
        </div>
      )}
    </div>
  );
}

export default App;
