const genreList = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=32592fc1c467ab313147df8555d6672d&language=en-US'
  );
  const data = await response.json();
  return data.genres;
};

let genreResponse;

const getGenre = async () => {
  if (!genreResponse) {
    genreResponse = await genreList();
  }
  return genreResponse.reduce((acc, genre) => {
    return {
      ...acc,
      [genre.id]: genre.name,
    };
  }, {});
};

const list = [28, 12, 14];
getGenre(list).then(result => console.log(result));

export { getGenre };
