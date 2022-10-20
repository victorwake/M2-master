

const initialState = {
    moviesFavourites: [],// [{title:titulo de la pelicula, id: id de la}]
    moviesLoaded: [],
    movieDetail: {}
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MOVIE_FAVORITE':
            if(state.moviesFavourites.find(movie => movie.id === action.payload.id)){
                return state
            }
            return {
            ...state,                                  //concatena el estado anterior con el nuevo
            moviesFavourites:[...state.moviesFavourites.concat(action.payload)]
             //action.payload va a ser {title:titulo de la pelicula y id: id de la pelicula que necesita para hacer el remove }
        }
        
        case "GET_MOVIES":
            return {
            ...state,
            moviesLoaded: action.payload.Search
        }

        case "GET_MOVIE_DETAIL":
            return{
            ...state,
            movieDetail: action.payload // me trae un objeto con los detalles
        }
    
        case  "REMOVE_MOVIE_FAVOURITE":
            return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter(movie => (movie.id !== action.id))
                                                            // el id para remover se encuentra cuando se agrega una peli a FAV
        }
        default: 
        return state

    }
    
    
}

export default rootReducer;
            // if(action.payload.Response === "False"){
            //     return {
            //         ...state,
            //         moviesLoaded: []
            //     }
            // }