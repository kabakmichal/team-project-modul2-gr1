import './sass/index.scss';

import { fetchOnStart } from './js/fetch';
import { movieSet } from './js/movieSet';
let indexOfFilm;
let movieInfo;
fetchOnStart()
  .then(data => {
    return movieSet(data.results),
    data.results;
  })
  .then(data => {
    document.querySelector(".gallery").addEventListener('click', (event) => {
      indexOfFilm = data.findIndex(film => film.id == event.target.id),
      movieInfo = data[indexOfFilm],
      console.log(movieInfo)
    }
    )
  
})
  .catch(err => {
    return console.error(err);
  });
