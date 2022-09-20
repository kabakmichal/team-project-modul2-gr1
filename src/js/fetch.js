import { getGenre } from './getGenre';
import { spinnerHidden } from './spinner';
import { spinnerVisible } from './spinner';
import { movieSet } from './movieSet';
import { pagination } from './pagination';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { currentPage } from './pagination';

const inputBtn = document.querySelector('.search-form__btn');
export const inputTitle = document.querySelector('.search-form__input');
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
    `https://api.themoviedb.org/3/search/multi?api_key=32592fc1c467ab313147df8555d6672d&query=${title}&page=${page}&include_adult=false`
  );
  const responseObject = await response.json();
  return responseObject;
};

inputTitle.addEventListener(
  'input',
  debounce(async event => {
    event.preventDefault();
    if (inputTitle.value == '') {
      return location.reload();
    }
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
  }, 900)
);

export { fetchOnStart };
export { fetchInput };
