import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let displayedDirectors = directors.map(director => {return <div key={director.name}>
    <h4>{director.name}</h4>
  <ul>{director.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
  </div>})
  return (
    <div>
      <h1>Directors Page</h1>
      {displayedDirectors}
    </div>
  );
}

export default Directors
