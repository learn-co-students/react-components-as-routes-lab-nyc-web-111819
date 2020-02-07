import React from 'react';
import { movies } from '../data';

let displayedMovies = movies.map(movie => {return <div key={movie.title}>
    <h2>Title: {movie.title}</h2>
    <h2>Duration: {movie.time}</h2>
    <ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
  </div>})

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {displayedMovies}
    </div>
  );
};

export default Movies;


// let renderMovie = movies.map(movie => {return <div> 
//   <h3>Name: {movie.title}</h3>
//   <p>Time: {movie.time}</p>
//   Genres: <ul> {movie.genres.map(genre => <li>{genre}</li>)}</ul>
// </div>})

// const Movies = () => {
//   return (
//     <div>
//         {/*{code here}*/}
//         <h1>Movies Page</h1>
//         {renderMovie}
//     </div>
//   );
// };
