import { modalSet, movieModalBox } from './modalSet';
import { addToQueue, addToWatched } from './Queue';
import { situation } from './library';


(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', event => {
    if (event.target.offsetParent.className !== 'movie-card') return;
    toggleModal();
    let movieId = event.target.offsetParent.dataset.id;
    let movie = JSON.parse(localStorage.getItem(situation))[movieId];
    modalSet(movie);
    refs.modal.addEventListener('click', e => {
      if (e.target.dataset.name === 'queue') {
        addToQueue(movie);
        movie = '';
      }
      if (e.target.dataset.name === 'watched') {
        addToWatched(movie);
        movie = '';
      }
    });
  });

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') toggleModal();
  });
  refs.closeModalBtn.addEventListener('click', () => {
    movieModalBox.innerHTML = '';
    toggleModal();
  });

  function toggleModal() {
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