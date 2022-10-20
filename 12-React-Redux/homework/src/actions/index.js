


const API = "http://www.omdbapi.com/?apikey=";
const key = "78b0ffd";

export function getMovies(titulo) {
    return function(dispatch) {
        return fetch(`${API}${key}&s=${titulo}`)
                // fetch("http://www.omdbapi.com/?apikey=78b0ffd&s=" + titulo)
            .then(response => response.json())
            .then(json => {
            dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}

export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch(`${API}${key}&i=${id}`)
            .then(response => response.json())
            .then(json => {
            dispatch({ type: "GET_MOVIE_DETAIL", payload: json });//.map(movie => movie.Title)
        });
    };
}

export function addMovieFavorite(title) {
    return { type: "ADD_MOVIE_FAVORITE", payload: title};
}

export function removeMovieFavorite(id) {
    return { type: "REMOVE_MOVIE_FAVOURITE", id };
}
