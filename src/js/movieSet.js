const gallery = document.querySelector('.gallery')

let movieSet = (data) => {
    const markup = data
        .map(
        //trzeba dodać genre, ale mamy tylko genre_ids(cyfry)
            ({poster_path,release_date,title}) => {
                return `<div class="movie-card">
    <img class="movie-card__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" loading="lazy" />
    <div class="movie-card__info">
        <p class="movie-card__title">
            <span>${title}</span>
        </p>
        <p class="movie-card__genre">
            <span>genre</span>
        </p>
        <p class="movie-card__year">
            <span>${release_date}</span>
        </p>
    </div>
</div>
`}).join("");
    console.log(markup);
    return gallery.insertAdjacentHTML('beforeend',markup);
};
export {movieSet}