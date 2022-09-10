const inputBtn = document.querySelector('.search-form__btn');
const inputTitle = document.querySelector('.search-form__input');
const gallery = document.querySelector('.gallery');
const paginationBtns = document.querySelector('.pagination_btns');

const API_KEY = '?api_key=32592fc1c467ab313147df8555d6672d';
const BASE_URL = 'https://api.themoviedb.org/3';
const MAIN_PAGE_URL = '/trending/all/day';
// const GENRE_URL = '/genre/movie/list';
let page = 1;

const fetchOnStart = async () => {
  const response = await fetch(
    `${BASE_URL}${MAIN_PAGE_URL}${API_KEY}&page=${page}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};


const fetchInput = async title => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=32592fc1c467ab313147df8555d6672d&query=${title}&page=${page}&include_adult=false`
  );
  const responseObject = await response.json();

  return responseObject;
};


let renderMovies = (data) => {
  gallery.innerHTML = '';
  const markup = data
      .map(
      
          ({poster_path,release_date,title, genre_ids}) => {
              return `<div class="movie-card">
  <img class="movie-card__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" loading="lazy" />
  <div class="movie-card__info">
      <p class="movie-card__title">
          <span>${title}</span>
      </p>
  <div class= "genreDate">
      <p class="movie-card__genre">
          <span>${genre_ids}</span>
      </p>
      <p class="movie-card__year">${release_date}
          <span></span>
      </p>
  </div>
  </div>
</div>
`}).join("");
  return gallery.insertAdjacentHTML('beforeend',markup);
};



const pagination = async (totalPages, title) => {
  // paginationBtns = '';
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


export{fetchOnStart}

