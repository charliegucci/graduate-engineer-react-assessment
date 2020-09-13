import React, { useState } from 'react';
import RecordMovieForm from './RecordMovieForm';
import MovieWatchedList from './MovieWatchedList';
import getMovies from '../helpers/getLocalMovieList';
import Stats from './Stats';

const LandingPage = () => {
  const [movieList, setMovieList] = useState(getMovies());

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>intelliHR</h1>
        </div>
        <div className='col text-right'>
          <h1>Movie watchlist </h1>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='alert alert-success' role='alert'>
            <RecordMovieForm setMovieList={setMovieList} />
          </div>
          <MovieWatchedList movieList={movieList} />
          <Stats movieList={movieList} />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
