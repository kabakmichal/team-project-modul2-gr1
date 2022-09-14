import { getGenre } from './getGenre';
const gallery = document.querySelector('.gallery');

let movieSet = async data => {
  const genreDict = await getGenre();
  const markup = data
    .map(
      //trzeba dodać genre, ale mamy tylko genre_ids(cyfry)
      ({ poster_path, release_date, first_air_date, title, name, genre_ids, id }) => {
        return `<div class="movie-card">
    <img class="movie-card__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" onerror="this.src = 'https://picsum.photos/id/237/274/398';alt="image of movie" loading="lazy" id='${id}' />
    <div class="movie-card__info">
        <p class="movie-card__title">
            <span>${title || name}</span>
        </p>
    <div class= "genreDate">
        <p class="movie-card__genre">
            <span>${genre_ids.map(id => genreDict[id]).join(', ')}</span>
        </p>
        <p class="movie-card__year">${
          release_date || first_air_date}
            <span></span>
        </p>
    </div>
    </div>
</div>
`;
      }
    )
    .join('');
  return gallery.insertAdjacentHTML('beforeend', markup);
};
export { movieSet };
