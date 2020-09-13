import React from 'react';
import { Col } from 'reactstrap';

const MovieListItem = ({ data }) => {
  const { movieTitle, dateWatched, rating, poster, genre, runtime } = data;
  const noPosterImage =
    'https://www.fcmlindia.com/images/fifty-days-campaign/no-image.jpg';
  return (
    <Col>
      {poster === 'N/A' ? <img src={noPosterImage} /> : <img src={poster} />}
      <div>
        <p>Title: {movieTitle}</p>
        <p>Genre: {genre}</p>
        <p>Date Watched: {dateWatched}</p>
        <p>Rating: {rating}</p>
        <p>Run Time: {runtime}</p>
      </div>
    </Col>
  );
};

export default MovieListItem;
