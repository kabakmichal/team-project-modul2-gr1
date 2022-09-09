const inputBtn = document.querySelector('.search-form__btn');
const inputTitle = document.querySelector('.search-form__input');
const galleryMovie = document.querySelector('.gallery');
const paginationBtns = document.querySelector('.pagination_btns');

const API_KEY = '?api_key=32592fc1c467ab313147df8555d6672d';
const BASE_URL = 'https://api.themoviedb.org/3';
const MAIN_PAGE_URL = '/trending/all/day';

let page = 1;
const fetchOnStart = async () => {
  const response = await fetch(
    `${BASE_URL}${MAIN_PAGE_URL}${API_KEY}&page=${page}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

fetchOnStart();

const fetchInput = async title => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=32592fc1c467ab313147df8555d6672d&query=${title}&page=${page}&include_adult=false`
  );
  const responseObject = await response.json();

  return responseObject;
};

const renderMovies = async movies => {
  const markup = movies
    .map(
      movie => `<div class="movie-card">
        <img src='${movie.backdrop_path}'/>
        <div class='info'>
        <p class="title">
            <b>Title</b> ${movie.original_title}
        </p>
        <p class="rate">
            <b>Rate</b> ${movie.vote_average}
        </p>
        </div>
        </div>`
    )
    .join('');

  galleryMovie.innerHTML = markup;
};

const pagination = async (totalPages, title) => {
  if (totalPages >= 1) {
    for (let i = 1; i <= totalPages; i++) {
      let btn = document.createElement('button');
      btn.innerHTML = i;

      paginationBtns.appendChild(btn);
    }
  }
};

inputBtn.addEventListener('click', async event => {
  event.preventDefault();

  const title = inputTitle.value.trim();
  console.log(title);

  try {
    const array = await fetchInput(title);
    console.log(array);
    const arrayMovies = [];
    array.results.forEach(async movie => {
      arrayMovies.push(movie);
    });

    renderMovies(arrayMovies);

    const totalPages = await array.total_pages;
    const totalMovies = await array.total_results;

    console.log(`Total pages: ${totalPages}`);
    console.log(`Total results: ${totalMovies}`);

    pagination(totalPages, title);

    // arrayMovies.forEach(async movie => {
    //   console.log(movie);
    // });
  } catch (error) {
    console.error(error);
  }
});
