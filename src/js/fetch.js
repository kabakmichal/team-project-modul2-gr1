const inputBtn = document.querySelector('.search-form__btn');
const inputTitle = document.querySelector('.search-form__input');

const API_KEY = '?api_key=32592fc1c467ab313147df8555d6672d';
const BASE_URL = 'https://api.themoviedb.org/3';
const MAIN_PAGE_URL = '/movie/popular';
// const API_URL = BASE_URL +  '/discover/movie?sort_by=popularity.desc&' + API_KEY;
let page = 1;
const fetchOnStart = async() => {
const response = await fetch(`${BASE_URL}${MAIN_PAGE_URL}${API_KEY}&page=1`);
     const data = await response.json();
   console.log(data);
    //return data;
}
// fetchTMDB(API_URL);
fetchOnStart();



const fetchInput = async(title)=>{
    const response = await fetch(`${BASE_URL}/search/${title}${API_KEY}&page=1`);
    const responseObject = await response.json();

    return responseObject;
}

inputBtn.addEventListener('click', async event => {
    event.preventDefault();
    //page = 1;
    const title = inputTitle.value.trim();
    console.log(title);
    
    try{
        const array = await fetchInput(title);
        const arrayMovies = [];
        array.results.forEach(async movie =>{
            arrayMovies.push(movie);
        });

        const totalMovies = await array.total_results;

        console.log(`Array of Movies: ${arrayMovies}`);s
        console.log(`Total results: ${totalMovies}`);
    }catch(error){
        console.error(error);
    }
})