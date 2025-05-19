import { useState } from 'react'
import './App.css'
import movieData from './movies.json'
import Drawer from './Components/drawer/drawer';

export interface Movie {
    id: string;
    title: string;
    posterUrl: string;
    genre: string[];
    rating: number;
    year: number;
    description: string;
    trailerUrl: string;
  }

function App() {
  const [count, setCount] = useState(0)

  const movies: Movie[] = movieData as Movie[];

  return (
    <div className='bg-black text-gray-600'>
      <Drawer/>
      <div className="movie_container">
        {movies.map((movies) => (
          <div key={movies.id}>
            <img src={movies.posterUrl} alt="movie_poster"/>
            <h1>{movies.title}</h1>
            <p>{movies.genre.join(', ')}</p>
            <p>{movies.description}</p>
            <p>{movies.year}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default App
