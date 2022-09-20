import './sass/index.scss';

import { fetchOnStart } from './js/fetch';
import { movieSet } from './js/movieSet';
import { topBtn } from './js/scrollToTop';
import { } from './js/modal';
import "./js/login-modal.js";
import "./js/modal-team";
import "./js/Queue";

fetchOnStart()
  .then(data => {
    
    return movieSet(data.results),
    data.results;
  })
  .catch(err => {
    return console.error(err);
  });
