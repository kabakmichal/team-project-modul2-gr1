import { modalSet, movieModalBox } from './modalSet';
import {
  addToQueue,
  addToWatched,
  removeFromWatched,
  removeFromQueue,
} from './Queue';
import { situation } from './library';

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  let clickHandler;
  let escHandler;
  refs.openModalBtn.addEventListener('click', event => {
    if (event.target.offsetParent.className !== 'movie-card') return;
    toggleModal();
    let movieId = event.target.offsetParent.dataset.id;
    let movie = JSON.parse(localStorage.getItem(situation))[movieId];
    modalSet(movie);
    clickHandler = e => {
      if (e.target.dataset.name === 'queue') addToQueue(movie);
      if (e.target.dataset.name === 'removeQueue') removeFromQueue(movie);
      if (e.target.dataset.name === 'watched') addToWatched(movie);
      if (e.target.dataset.name === 'removeWatched') removeFromWatched(movie);
      modalSet(movie);
    };
    escHandler = e => {
      if (e.code === 'Escape') {
        toggleModal();
        location.reload();
      }
    };
    refs.modal.addEventListener('click', clickHandler);
    document.addEventListener('keydown', escHandler);
  });

  refs.closeModalBtn.addEventListener('click', () => {
    movieModalBox.innerHTML = '';
    toggleModal();
    location.reload();
  });

  function toggleModal() {
    if (clickHandler) {
      refs.modal.removeEventListener('click', clickHandler);
      clickHandler = null;
    }
    if (escHandler) {
      document.removeEventListener('keydown', escHandler);
      escHandler = null;
    }
    refs.modal.classList.toggle('is-hidden');
  }
})();

//const fetchOneMovie = key => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${key}?api_key=32592fc1c467ab313147df8555d6672d`
//   ).then(response => {
//     if (!response.ok) throw new Error(response.status);
//     return response.json();
//   });
// };
// const fetchOneTV = key => {
//   return fetch(
//     `https://api.themoviedb.org/3/tv/${key}?api_key=32592fc1c467ab313147df8555d6672d`
//   ).then(response => {
//     if (!response.ok) throw new Error(response.status);
//     return response.json();
//   });
// };
