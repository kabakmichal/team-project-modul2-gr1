// dodanie do watchlisty

const addToQueue = object => {
  if (object === '') return;
  const queueList = JSON.parse(localStorage.getItem('queue')) || [];
  if (
    queueList.find(
      option =>
        option.media_type === object.media_type && option.id === object.id
    )
  )
    return;

  queueList.push(object);
  try {
    localStorage.setItem('queue', JSON.stringify(queueList));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const addToWatched = object => {
  if (object === '') return;
  const watchedList = JSON.parse(localStorage.getItem('watched')) || [];

  if (
    watchedList.find(
      option =>
        option.media_type === object.media_type && option.id === object.id
    )
  )
    return;

  watchedList.push(object);
  try {
    localStorage.setItem('watched', JSON.stringify(watchedList));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export { addToQueue, addToWatched };
