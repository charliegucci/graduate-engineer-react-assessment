import React, { useState } from 'react';
import { Input, Form, Button } from 'reactstrap';
import getMovies from '../helpers/getLocalMovieList';
import moment from 'moment';

const RecordMovieForm = ({ setMovieList }) => {
  // sets date watched to current date using moment
  const [values, setValues] = useState({
    dateWatched: moment().format('YYYY-MM-DD')
  });
  const { movieTitle, dateWatched, rating } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!movieTitle || !dateWatched || !rating) {
      return alert('Sorry please enter all fields');
    }
    let localStorageMovieList = getMovies();
    let newMovie = values;
    const searchTitle = movieTitle.split(' ').join('+');
    // hit api endpoint
    const request = await fetch(
      `http://www.omdbapi.com/?t=${searchTitle}&apikey=3b7a00b`
    );
    const { Genre, Poster, Runtime } = await request.json();

    newMovie.poster = Poster;
    newMovie.genre = Genre;
    newMovie.runtime = Runtime;
    localStorageMovieList.push(newMovie);
    localStorage.setItem('MovieList', JSON.stringify(localStorageMovieList));
    setMovieList(localStorageMovieList);
  };

  return (
    <Form>
      <div className='form-group'>
        <label className='text-muted'>Movie:</label>
        <Input
          name='movieTitle'
          type='text'
          placeholder='Movie Title'
          onChange={handleChange('movieTitle')}
          value={movieTitle}></Input>
      </div>
      <div className='form-group'>
        <label className='text-muted'>Date Watched:</label>
        <br />
        <Input
          type='date'
          placeholder='Select watched date'
          name='dateWatched'
          onChange={handleChange('dateWatched')}
          value={dateWatched}></Input>
      </div>
      <div className='form-group'>
        <label className='text-muted'>Rating:</label>
        <Input
          type='select'
          placeholder='Rating'
          name='rating'
          onChange={handleChange('rating')}
          value={rating}>
          <option selected=''>1-5</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </div>
      <div className='form-group'>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Form>
  );
};

export default RecordMovieForm;
