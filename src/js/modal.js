import { modalSet, movieModalBox } from './modalSet';
import { addToQueue, addToWatched } from './Queue';

const fetchOneMovie = key => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${key}?api_key=32592fc1c467ab313147df8555d6672d`
  ).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
};
const fetchOneTV = key => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${key}?api_key=32592fc1c467ab313147df8555d6672d`
  ).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
};

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  let clickHandler;
  let escHandler;

  refs.openModalBtn.addEventListener('click', async event => {
    if (event.target.offsetParent.className !== 'movie-card') return;
    toggleModal();
    let movieId = event.target.offsetParent.dataset.id;
    let movie;
    if (event.target.offsetParent.dataset.type === 'movie')
      movie = await fetchOneMovie(movieId);
    if (event.target.offsetParent.dataset.type === 'tv')
      movie = await fetchOneTV(movieId);
    await modalSet(movie);
    clickHandler = e => {
      if (e.target.dataset.name === 'queue') addToQueue(movie);
      if (e.target.dataset.name === 'watched') addToWatched(movie);
    };
    escHandler = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    refs.modal.addEventListener('click', clickHandler);
    document.addEventListener('keydown', escHandler);
  });

  refs.closeModalBtn.addEventListener('click', () => {
    movieModalBox.innerHTML = '';
    toggleModal();
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
