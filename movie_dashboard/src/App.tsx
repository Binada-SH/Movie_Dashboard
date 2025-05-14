import React from 'react';
import movieData from './movies.json';
import './App.css';
import Drawer from './Components/Drawer/drawer';

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
      <Drawer/>
      <div className="movie_container">
        {movies.map((movies) => (
          <div key={movies.id}>
            <img className="movie_poster" src={movies.posterUrl} alt={movies.title}/>
            <h2>{movies.title}</h2>
            <p className='movie_genre'>{movies.genre.join(', ')}</p>
            <p className='movie_description'>{movies.description}</p>
            <p className='movie_year'>{movies.year}</p>
          </div>
        ))}
      </div>







    </div>
  );
}

export default App;
