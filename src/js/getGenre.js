const genreList = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=32592fc1c467ab313147df8555d6672d&language=en-US'
  );
  const secondResponse = await fetch(
    'https://api.themoviedb.org/3/genre/tv/list?api_key=32592fc1c467ab313147df8555d6672d&language=en-US'
  );

  const firstData = await response.json();
  const secondData = await secondResponse.json();
  const data = [
    ...new Map(
      [...firstData.genres, ...secondData.genres].map(item => [
        item['id'],
        item,
      ])
    ).values(),
  ];
  return data;
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

export { getGenre };
