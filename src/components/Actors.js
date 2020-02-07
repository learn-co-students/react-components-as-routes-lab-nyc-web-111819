import React from 'react';
import { actors } from '../data';

let displayedActors = actors.map(actor => {return <div key={actor.name}>
  <h4>{actor.name}</h4>
  <ul>{actor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
</div>})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {displayedActors}
    </div>
  );
};

export default Actors;
