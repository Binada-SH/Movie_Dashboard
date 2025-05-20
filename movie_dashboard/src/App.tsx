import { useState } from 'react'
import './App.css'
import movieData from './movies.json'
import Drawer from './Components/drawer/drawer';
import Search from './Components/search/search';
import Navbar from './Components/navbar/navbar';

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
    <div className='bg-[#060606] w-full min-h-full '>
      <div className='flex h-screen'>
        <Drawer/>
      <div className='flex-1 flex-col'>
        <Search/>
      <div className='flex-2 flex-col'>
        <Navbar/>
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
      </div>
      </div>
    </div>
  )
}

export default App
