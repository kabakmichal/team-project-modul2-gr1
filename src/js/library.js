// import { movieSet } from './movieSet';
import { getGenre } from './getGenre';
import '../sass/index.scss';

const myList = document.querySelector('.my-list');

const movieSetLibrary = async data => {
  const genreDict = await getGenre();

  const markup = data
    .map(
      //trzeba dodać genre, ale mamy tylko genre_ids(cyfry)
      ({
        id,
        media_type,
        poster_path,
        release_date,
        first_air_date,
        title,
        name,
        genres,
      }) => {
        let filmDate = release_date || first_air_date || '????';
        if (media_type === 'person') return;
        return `<div class="movie-card" data-id="${id}" data-type="${media_type}">
      <img class="movie-card__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" onerror="this.src = 'https://picsum.photos/id/237/274/398'";alt="image of movie" loading="lazy" />
      <div class="movie-card__info">
          <p class="movie-card__title">
              <span>${title || name}</span>
          </p>
      <div class= "genreDate">
          <p class="movie-card__genre">
              <span>${genres
                .map(id => genreDict[id])
                .splice(0, 2)
                .join(', ')}</span>
          </p>
          <p class="movie-card__year">| ${filmDate.slice(0, 4)}
              <span></span>
          </p>
      </div>
      </div>
  </div>
  `;
      }
    )
    .join('');
  return myList.insertAdjacentHTML('beforeend', markup);
};

const getQueueData = async () => {
  try {
    const queue = JSON.parse(localStorage.getItem('queue')) || [];
    if (queue === null) {
      return;
    }
    return queue;
  } catch (error) {
    console.log(error);
  }
};

const getWatchedData = async () => {
  try {
    const watched = JSON.parse(localStorage.getItem('watched')) || [];
    if (watched === null) {
      return;
    }
    return watched;
  } catch (error) {
    console.log(error);
  }
};

// function findFilmByIdLs(id) {
//     const films = [...getQueueData(), ...getWatchedData()]
//     const film = films.find((film) => film.id == id)
//     return film
// }

const refs = {
  btnWatchedHeaderEl: document.querySelector('.header-watched'),
  btnQueueHeaderEl: document.querySelector('.header-queue'),
};

// const onWatchedBtnClick = async () => {
//   const arrayFilms = await getWatchedData();
//   movieSetLibrary(arrayFilms);
// };

// const onQueueBtnClick = async () => {
//   const arrayFilms = await getQueueData();
//   movieSetLibrary(arrayFilms);
// };

refs.btnWatchedHeaderEl.addEventListener('click', async () => {
  const arrayFilms = await getWatchedData();
  movieSetLibrary(arrayFilms);
});
refs.btnQueueHeaderEl.addEventListener('click', async () => {
  const arrayFilms = await getQueueData();
  movieSetLibrary(arrayFilms);
});

onWatchedBtnClick();