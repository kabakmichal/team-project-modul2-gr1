const genreList = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=32592fc1c467ab313147df8555d6672d&language=en-US'
  );
  const data = await response.json();
  return data.genres;
};

const getGenre = genreId => {
  let genresDescription = '';
   genreList()
    .then(data => {
       genreId.forEach(element => {
        genresDescription += `${
          data.find(secondElement => secondElement.id === element).name
        }, `;
      });
      // console.log(genresDescription);
      string = genresDescription;
    })
    .catch(error => console.log(error));
};

const list = [28, 12, 14];

//string = getGenre(list);
//console.log(`lece stringiem ${string}`);
console.log(getGenre(list));

export { getGenre };
