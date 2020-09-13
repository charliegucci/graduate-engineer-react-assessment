import React from 'react';
import { Table } from 'reactstrap';

const Stats = ({ movieList }) => {
  let totalRunTime = 0;
  let averageRating = 0;
  let genreFrequency = {};
  movieList.map(({ runtime, rating, genre }) => {
    // checks N/A from API response
    // total run time
    if (runtime !== 'N/A') {
      totalRunTime += Number(runtime.split(' ')[0]);
    }
    // checks N/A from API response
    // average rating
    if (rating !== 'N/A') {
      averageRating += Number(rating.split(' ')[0]) / movieList.length;
    }
    // checks N/A from API response
    // genre frequency
    if (genre !== 'N/A') {
      genre.split(', ').map((genre) => {
        if (genreFrequency[genre]) genreFrequency[genre] += 1;
        else genreFrequency[genre] = 1;
      });
    }
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>Average Ratings:</th>
          <td>{averageRating.toFixed(2)}</td>
        </tr>
        <tr>
          <th scope='row'>Total Runtime:</th>
          <td>{totalRunTime}</td>
        </tr>
      </tbody>
      <thead>
        <th>Genre Frequency:</th>
        <th></th>
      </thead>
      {Object.keys(genreFrequency).map((genre) => {
        return (
          <tr>
            <th scope='row'>{genre}</th>
            <td>{genreFrequency[genre]}</td>
          </tr>
        );
      })}
    </Table>
  );
};

export default Stats;
