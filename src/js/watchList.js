// dodanie do objerzanych

function addWatched(data) {
    let watchedList = JSON.parse(localStorage.getItem('watched')) || []
    
    if(data = null) {
return []

    }
    toWatchlist.push(data)
    localStorage.setItem('watched', JSON.stringify(WatchedList))

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