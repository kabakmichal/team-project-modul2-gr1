// dodanie do watchlisty

function addtoQueue(data) {
    let queueList = JSON.parse(localStorage.getItem('queue')) || []

    if(data = null) {
return []

    }
    queueList.push(data)
    localStorage.setItem('queue', JSON.stringify(queueList))

}
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
