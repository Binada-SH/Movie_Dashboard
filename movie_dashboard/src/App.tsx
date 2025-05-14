import React from 'react';
import movieData from './movies.json';
import './App.css';

export interface Movie {
  id: string,
  title: string,
  posterUrl: string,
  genre: string[],
  rating: number,
  year: number,
  description: string,
  trailerUrl: string
}

function App() {
  const movies: Movie[] = movieData as Movie[];
  return (
    <div className="App">
      <h1 className="wite_name">Cine Stream</h1>
      <div className="movie_container">
        {movies.map((movies) => (
          <div key={movies.id}>
            <img src={movies.posterUrl} alt={movies.title} className="movie_poster" />
            <h2>{movies.title}</h2>
            <p>{movies.genre.join(', ')}</p>
            <p>{movies.description}</p>
            <p>{movies.year}</p>
          </div>
        ))}
      </div>







    </div>
  );
}

export default App;
