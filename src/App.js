import './App.css';
import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import movieRawData from './Data/MoviesRawData'; // Corrected import path
import NavB from './Components/NavB'; // Corrected import path
import Home from './Components/Home'; // Corrected import path
import About from './Components/About'; // Import the About component
import MoviePage from './Components/MoviePage'; // Import the MoviePage component

function App() {
  const [newMovieData, setNewMovieData] = useState(movieRawData);

  return (
    <div className='App'>
      <NavB newMovieData={newMovieData} setNewMovieData={setNewMovieData} />
      <Routes>
        <Route path="/" element={<Home newMovieData={newMovieData} setNewMovieData={setNewMovieData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-page/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
