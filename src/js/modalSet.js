const movieModalBox = document.querySelector('.modal__movie-box');

let modalSet = async movie => {
  movieModalBox.innerHTML = '';
  const {
    imgAlt,
    poster_path,
    title,
    name,
    genres,
    vote_average,
    vote_count,
    popularity,
    overview,
  } = movie;
  let imgSrc = `https://image.tmdb.org/t/p/w300${poster_path}`;
  if (poster_path === null) {
    imgSrc = new URL('https://picsum.photos/id/237/274/398');
  }
  let markup = `<div class="modal__movie-box-separation">
                <div class="modal__movie-box-photo"><img class="modal__movie-image" src="${imgSrc}"  alt="Poster of: ${imgAlt}"
                        loading="lazy"></div>
                <div class="modal__movie-box-info">
                    <h2 class="modal__movie-box-title">${title || name}</h2>
                    <ul class="modal__movie-box-details">
                        <li class="modal__movie-details-li"><span class="modal__movie-details-label">Vote /Votes </span><span><span class="modal__movie-details-vote">${Number(
                          vote_average
                        ).toFixed(1)}</span> / ${vote_count}</span></span></li>
                        </li>
                        <li class="modal__movie-details-li"><span class="modal__movie-details-label">Popularity</span><span
                                class="modal__movie-details-value">${Number(
                                  popularity
                                ).toFixed(0)}</span></li>
                        <li class="modal__movie-details-li"><span class=" modal__movie-details-label">Original Title</span><span
                                class="modal__movie-details-value modal__movie-details-title">${
                                  title || name
                                }</span></li>
                        <li class="modal__movie-details-li"><span class=" modal__movie-details-label">Genre</span><span
                                class="modal__movie-details-value">${genres
                                  .map(genre => genre.name)
                                  .join(', ')}</span></li>
                        </li>
                    </ul>
                    <h3 class="modal__movie-about-label">About</h3>
                    <p class="modal__movie-about-text">${overview}</p>
                    <div class="modal__movie-btns--wrapper">
                        ${watchedButton(movie)}
                        ${queueButton(movie)}
                    </div>
                </div>
            </div>`;

  return movieModalBox.insertAdjacentHTML('beforeend', markup);
};

const queueButton = object => {
  const queueList = JSON.parse(localStorage.getItem('queue')) || [];
  if (
    !queueList.find(
      option =>
        option.media_type === object.media_type && option.id === object.id
    )
  )
    return `<button type="button" class="modal__movie-btns modal__movie-btns-queue" data-name="queue">Add
                            to queue</button>`;
  return `<button type="button" class="modal__movie-btns modal__movie-btns-queue" data-name="removeQueue">Remove from Queue</button>`;
};
const watchedButton = object => {
  const watchedList = JSON.parse(localStorage.getItem('watched')) || [];
  if (
    !watchedList.find(
      option =>
        option.media_type === object.media_type && option.id === object.id
    )
  )
    return `<button type="button" class="modal__movie-btns modal__movie-btns--watch" data-name="watched"
                            >Add to watched</button>`;
  return `<button type="button" class="modal__movie-btns modal__movie-btns--watch" data-name="removeWatched"
                            >Remove from watched</button>`;
};

export { modalSet, movieModalBox };
