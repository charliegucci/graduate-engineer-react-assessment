import React from 'react';

const Stats = ({ movieList }) => {
  let totalRunTime = 0;
  movieList.map((movie) => {
    if (movie.runtime !== 'N/A') {
      totalRunTime += Number(movie.runtime.split(' ')[0]);
    }
  });

  let averageRating = 0;
  movieList.map((rating) => {
    if (rating.rating !== 'N/A') {
      averageRating += Number(rating.rating.split(' ')[0]) / movieList.length;
    }
  });

  return (
    <div>
      <p>Average Ratings: {averageRating}</p>
      <p>Total Runtime: {totalRunTime} </p>
    </div>
  );
};

export default Stats;
