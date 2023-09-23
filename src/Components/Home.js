import React, { useState } from 'react';
import Carousell from './Carousell';
import FilteringB from './FilteringB';
import SortingB from './SortingB';
import MovieList from './MovieList';
import movieRawData from '../Data/MoviesRawData'; // Corrected import path

function Home({ newMovieData, setNewMovieData }) {

  const handleFilter = (filters) => {
    // Simulated filtering logic
    const filteredData = movieRawData.filter((movie) => {
      // Simulated filter conditions
      const keywordMatch = filters.KeyWord
        ? movie.title.toLowerCase().includes(filters.KeyWord.toLowerCase())
        : true;
      const ratingMatch = filters.rating ? movie.rating >= filters.rating : true;
      return keywordMatch && ratingMatch;
    });

    // Update the newMovieData state with the filtered data
    setNewMovieData(filteredData);
  };

  const handleClear = () => {
    // Simulated clearing filters by resetting to original data
    setNewMovieData(movieRawData);
  };

  return (
    <div className='Home'>
      <Carousell />
      <FilteringB onFilter={handleFilter} onClear={handleClear} />
      <SortingB newMovieData={newMovieData} setNewMovieData={setNewMovieData} />
      <MovieList newMovieData={newMovieData} />

      
    </div>
  );
}

export default Home;
