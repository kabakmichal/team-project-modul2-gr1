// dodanie do watchlisty

const addToQueue = object => {
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

const removeFromQueue = object => {
  const queueList = JSON.parse(localStorage.getItem('queue')) || [];

  const filteredArray = queueList.filter(
    option =>
      !(option.media_type === object.media_type && option.id === object.id)
  );
  console.log(filteredArray);

  try {
    localStorage.setItem('queue', JSON.stringify(filteredArray));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const addToWatched = object => {
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
const removeFromWatched = object => {
  const queueList = JSON.parse(localStorage.getItem('watched')) || [];

  const filteredArray = queueList.filter(
    option =>
      !(option.media_type === object.media_type && option.id === object.id)
  );
  console.log(filteredArray);

  try {
    localStorage.setItem('watched', JSON.stringify(filteredArray));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export { addToQueue, addToWatched, removeFromQueue, removeFromWatched };
