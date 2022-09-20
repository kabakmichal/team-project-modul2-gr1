import { paginationBtns } from './fetch';
import { inputTitle } from './fetch';
import { fetchInput } from './fetch';
import { movieSet } from './movieSet';
export let currentPage = 1;

const pagination = async (totalPages, title, currentPage) => {
  paginationBtns.innerHTML = '';
  const maxLoop = totalPages + 1;
  if (totalPages >= 1) {
    for (let i = 0; i <= maxLoop; i++) {
      let btn = document.createElement('button');

      if (currentPage == i) {
        btn.classList.add("active");
      }
      
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

export { pagination };
