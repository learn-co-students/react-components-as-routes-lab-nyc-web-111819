import React from 'react';
import { directors } from '../data';

let renderDirector = directors.map(director => {return <div> 
  <h3>Name: {director.name}</h3>
  Movies: <ul> {director.movies.map(movie => <li>{movie}</li>)}</ul>
</div>})


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirector}
    </div>
  );
}

export default Directors
