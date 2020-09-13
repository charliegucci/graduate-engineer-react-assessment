import React from 'react';

const MovieListItem = ({ data }) => {
  const { movieTitle, dateWatched, rating, poster, genre } = data;
  const noPosterImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTFAw5wvwqWLF-iHY2hLQXNJmszSVXNWKHzQ&usqp=CAU';
  return (
    <div>
      {poster === 'N/A' ? <img src={noPosterImage} /> : <img src={poster} />}
      <p>Movie Title: {movieTitle}</p>
      <p>Date Watched: {dateWatched}</p>
      <p>Rating: {rating}</p>
      <p>Genre: {genre}</p>
    </div>
  );
};

export default MovieListItem;
