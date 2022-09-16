const movieModalBox = document.querySelector('.movie-box');

let modalSet = async movie => {
  movieModalBox.innerHTML = '';
  console.log(movie);
  const {
    id,
    imgAlt,
    media_type,
    poster_path,
    release_date,
    first_air_date,
    title,
    name,
    genres,
    vote_average,
    vote_count,
    popularity,
    overview,
  } = movie;
  let markup = `<div class="movie-box-separation">
                <div class="movie-box-photo"><img class="movie__image" src="https://image.tmdb.org/t/p/w300${poster_path}"  alt="Poster of: ${imgAlt}"
                        loading="lazy"></div>
                <div class="movie-box-info">
                    <h2 class="modal-movie-title">${title || name}</h2>
                    <ul class="modal-movie-details">
                        <li class="modal-movie-details-li"><span class=" details__label">Vote/Votes</span><span
                                class="details__rating">${Number(vote_average).toFixed(1)}/${vote_count}</span></span></li>
                        </li>
                        <li class="modal-movie-details-li"><span class=" details__label">Popularity</span><span
                                class="details__value">${Number(
                                  popularity
                                ).toFixed(0)}</span></li>
                        <li class="modal-movie-details-li"><span class=" details__label">Original Title</span><span
                                class="details__value details__title">${title}</span></li>
                        <li class="modal-movie-details-li"><span class=" details__label">Genre</span><span
                                class="details__value">${genres
                                  .map(genre => genre.name)
                                  .join(', ')}</span></li>
                        </li>
                    </ul>
                    <h3 class="movie__label">About</h3>
                    <p class="movie__about">${overview}</p>
                    <div class="modal__btns--wrapper">
                        <button type="button" class="modal__btns modal__btns--watch" data-name="watched"
                            data-id=${id}>Add to watched</button>
                        <button type="button" class="modal__btns modal__btns--queue" data-name="queue" data-id=${id}>Add
                            to queue</button>
                    </div>
                </div>
            </div>`;

  return movieModalBox.insertAdjacentHTML('beforeend', markup);
};
export { modalSet };
