import React from 'react';
import MovieListItem from './MovieListItem';
import { CardDeck } from 'reactstrap';

const MovieWatchedList = ({ movieList }) => {
  //sort movie list in descending order
  movieList.sort((a, b) => {
    if (a.dateWatched > b.dateWatched) return -1;
    if (a.dateWatched < b.dateWatched) return 1;
    else return 0;
  });
  return (
    <CardDeck>
      {movieList.map((movie) => {
        return <MovieListItem data={movie} />;
      })}
    </CardDeck>
  );
};

export default MovieWatchedList;
