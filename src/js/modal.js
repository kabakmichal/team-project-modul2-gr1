import { modalSet, movieModalBox } from './modalSet';

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

  // Zmienna movie przechowuje obiekt z konkretnym filmem !!!!!!!

  refs.openModalBtn.addEventListener('click', async event => {
    if (event.target.offsetParent.className !== 'movie-card') return;
    toggleModal();
    let movieId = event.target.offsetParent.dataset.id;
    let movie;
    console.log(event.target.offsetParent.dataset.type);
    if (event.target.offsetParent.dataset.type === 'movie')
      movie = await fetchOneMovie(movieId);
    if (event.target.offsetParent.dataset.type === 'tv')
      movie = await fetchOneTV(movieId);
    modalSet(movie);
  });
  refs.closeModalBtn.addEventListener('click', () => {
    toggleModal();
    movieModalBox.innerHTML = '';
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
