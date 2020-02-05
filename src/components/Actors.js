import React from 'react';
import { actors } from '../data';

let renderActors = actors.map(actor => {return <div> 
  <h3>Name: {actor.name}</h3>
  Movies: <ul> {actor.movies.map(movie => <li>{movie}</li>)}</ul>
</div>})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  );
};

export default Actors;
