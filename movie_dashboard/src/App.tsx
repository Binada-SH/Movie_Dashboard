import { useState } from 'react';
import './App.css';
import movieData from './movies.json';
import Drawer from './Components/drawer/drawer';
import Search from './Components/search/search';
import Navbar from './Components/navbar/navbar';
import Account from './Components/account/account';

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
  const [count, setCount] = useState(0);
  
  const movies = movieData as Movie[];

  return (
    <div className="bg-[#060606] w-full min-h-full">
      <div className="flex h-screen">
        <Drawer />
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <div className="flex items-center bg-[#060606] z-10">
            <Search />
            <Navbar />
            <Account />
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <h1 className="text-xl text-white mb-4">Library</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img 
                    src={movie.posterUrl} 
                    alt={`${movie.title} poster`} 
                    className="w-full h-100 object-cover rounded"/>
                  <h3 className="text-white mt-2 text-md font-[lato]">{movie.title}</h3>
                  <p className="text-gray-400 text-xs">{movie.genre.join(', ')}</p>
                  <p className="text-gray-400 text-xs">{movie.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;