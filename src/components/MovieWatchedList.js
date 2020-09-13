import React from 'react';
import MovieListItem from './MovieListItem';

const MovieWatchedList = ({ movieList }) => {
  movieList.sort((a, b) => {
    if (a.dateWatched > b.dateWatched) return -1;
    if (a.dateWatched < b.dateWatched) return 1;
    else return 0;
  });
  return (
    <div>
      {movieList.map((movie) => {
        return <MovieListItem data={movie} />;
      })}
    </div>
  );
};

export default MovieWatchedList;
