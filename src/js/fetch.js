import { getGenre } from './getGenre';
import { spinnerHidden } from './spinner';
import { spinnerVisible } from './spinner';
import { movieSet } from './movieSet';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const inputBtn = document.querySelector('.search-form__btn');
const inputTitle = document.querySelector('.search-form__input');
export const gallery = document.querySelector('.gallery');
export const paginationBtns = document.querySelector('.pagination_btns');

const API_KEY = '?api_key=32592fc1c467ab313147df8555d6672d';
const BASE_URL = 'https://api.themoviedb.org/3';
const MAIN_PAGE_URL = '/trending/all/day';

const fetchOnStart = async () => {
  const response = await fetch(`${BASE_URL}${MAIN_PAGE_URL}${API_KEY}&page=1`);
  const data = await response.json();
  console.log(data);
  return data;
};

const fetchInput = async (title, page = 1) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=32592fc1c467ab313147df8555d6672d&query=${title}&page=${page}&include_adult=false`
  );
  const responseObject = await response.json();
  return responseObject;
};

//w <p class="movie-card__year">${release_date || first_air_date} nie działa mi slice popatrzę jeszcze dlaczego

let currentPage = 1;

const pagination = async (totalPages, title, currentPage) => {
  paginationBtns.innerHTML = '';
  const maxLoop = totalPages + 1;
  if (totalPages >= 1) {
    for (let i = 0; i <= maxLoop; i++) {
      let btn = document.createElement('button');
      if (i === 0) {
        btn.innerHTML = '<';
        btn.addEventListener('click', async () => {
          if (currentPage === 1) {
            return;
          }
          const title = inputTitle.value.trim();
          try {
            const array = await fetchInput(title, currentPage - 1);
            console.log(array);
            const arrayMovies = [];
            array.results.forEach(async movie => {
              arrayMovies.push(movie);
            });
            movieSet(arrayMovies);
            currentPage -= 1;
            pagination(totalPages, title, currentPage);
            return currentPage;
          } catch (error) {
            console.error(error);
          }
        });
      }
      if (i === maxLoop) {
        btn.innerHTML = '>';
        btn.addEventListener('click', async () => {
          if (currentPage === totalPages) {
            return;
          }
          const title = inputTitle.value.trim();
          try {
            const array = await fetchInput(title, currentPage + 1);
            console.log(array);
            const arrayMovies = [];
            array.results.forEach(async movie => {
              arrayMovies.push(movie);
            });
            movieSet(arrayMovies);
            currentPage += 1;
            pagination(totalPages, title, currentPage);
            return currentPage;
          } catch (error) {
            console.error(error);
          }
        });
      }
      if (totalPages <= 9 && i >= 1 && i <= totalPages) {
        btn.innerHTML = i;

        btn.addEventListener('click', async () => {
          const title = inputTitle.value.trim();
          try {
            const array = await fetchInput(title, i);
            console.log(array);
            const arrayMovies = [];
            array.results.forEach(async movie => {
              arrayMovies.push(movie);
            });
           
           
            movieSet(arrayMovies);
          } catch (error) {
            console.error(error);
          }
        });
      }
      if (totalPages > 9) {
        if (i > 0 && i < maxLoop) {
          btn.innerHTML = i;
          btn.addEventListener('click', async () => {
            const title = inputTitle.value.trim();
            try {
              const array = await fetchInput(title, i);
              console.log(array);
              const arrayMovies = [];
              array.results.forEach(async movie => {
                arrayMovies.push(movie);
              });
              movieSet(arrayMovies);
              currentPage = i;
              pagination(totalPages, title, currentPage);
              return currentPage;
            } catch (error) {
              console.error(error);
            }
          });
          if (i === 1 || i === totalPages) {
            btn.innerHTML = i;
          } else if (currentPage >= 5 && currentPage > 0 && i === 2) {
            btn.innerHTML = '...';
          } else if (currentPage <= totalPages - 4 && i === totalPages - 1) {
            btn.innerHTML = '...';
          } else {
            if (
              (i < currentPage - 2 && i <= totalPages - 7) ||
              (i > currentPage + 2 && i >= 8)
            ) {
              continue;
            }
          }
        }
      }

      if (btn.textContent === '...') {
        btn.disabled = true;
      }
      paginationBtns.appendChild(btn);
    }
  }
};

inputTitle.addEventListener('input', debounce (async event => {
  event.preventDefault();
  if (inputTitle.value=="") {return location.reload()}
  const title = inputTitle.value.trim();
  console.log(title);

  try {
    const array = await fetchInput(title);
    console.log(array);
    const arrayMovies = [];
   
     
    array.results.forEach(async movie => {
      arrayMovies.push(movie);
    });

    if (!array.total_results) {
      spinnerVisible();
      movieSet();
    } else {
      spinnerHidden();
      
    }

   Notiflix.Loading.init({ svgColor: '#ff6b08' });
   Notiflix.Loading.circle('Loading...');
    
    movieSet(arrayMovies);

    Notiflix.Loading.remove(450);

    const totalPages = await array.total_pages;
    const totalMovies = await array.total_results;
  
    console.log(`Total pages: ${totalPages}`);
    console.log(`Total results: ${totalMovies}`);

    pagination(totalPages, title, currentPage);
  } catch (error) {
    console.error(error);
  }
},900));

export { fetchOnStart };
