<<<<<<< Updated upstream
import './sass/index.scss';
=======
import './sass/index.scss'



// dodanie do watchlisty

function addtoQueue(data) {
    let queueList = JSON.parse(localStorage.getItem('queue')) || []

    if(data = null) {
return []

    }
    queueList.push(data)
    localStorage.setItem('queue', JSON.stringify(queueList))

}

// dodanie do objerzanych

function addWatched(data) {
    let watchedList = JSON.parse(localStorage.getItem('watched')) || []
    
    if(data = null) {
return []

    }
    toWatchlist.push(data)
    localStorage.setItem('watched', JSON.stringify(WatchedList))

}


// pobranie watchlisty

function getQueue() {
    try {
        const toWatch = JSON.parse(localStorage.getItem('queue')) || []

        if(toWatch = null) {
            return []
        }
        return toWatch
    } catch(error) {
        console.log('error')
    }
    

}


// pobranie obejrzanych

function getWatched() {
    try {
        const watchedList = JSON.parse(localStorage.getItem('watched')) || []

        if(watchedList = null) {
            return []
        }
        return toWatch
    } catch(error) {
        console.log('error')
    }
    

}

// popular movies on start

async function getPopularMovies(page = 1) {
    let data = []
    try {
        const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
        const responseData = await response.json()
        data = responseData?.results
    } catch (error) {
        
    }
    return data
}
>>>>>>> Stashed changes
