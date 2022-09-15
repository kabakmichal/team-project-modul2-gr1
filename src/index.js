import './sass/index.scss';

import { fetchOnStart } from './js/fetch';
import { movieSet } from './js/movieSet';
import { topBtn } from './js/scrollToTop';

fetchOnStart()
  .then(data => {
    
    return movieSet(data.results),
    data.results;
  })
  .then(data => {
    document.querySelector(".gallery").addEventListener('click', (event) => {
      if (event.target == document.querySelector(".gallery")) { return }
      let indexOfFilm;
      let movieInfo;
      indexOfFilm = data.findIndex(film => film.id == event.target.id),
      movieInfo = data[indexOfFilm],
      console.log(movieInfo)
    }
    )
  
})
  .catch(err => {
    return console.error(err);
  });
