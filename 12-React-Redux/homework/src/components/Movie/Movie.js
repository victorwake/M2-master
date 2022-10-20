import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    constructor(props) {//
        super(props);
      }
      componentDidMount() {//se ejecuta despues de que el componente se monte
        const movieID = this.props.match.params.id;
        this.props.getMovieDetail(movieID);//aca se despacha la accion -> se llena el estado de movieDetail
      }
      render() {
        const movie = this.props.movie;
        return (
          <div className="container details movie-card">
            <h1 className="title">
              {movie.Title}
              <span>{movie.Rated}</span>
            </h1>
            <span>{movie.Year}</span>
            <p className='plot'>{movie.Plot}</p>
            <div className="description container2">
              <img className='img' src={movie.Poster} alt="movie poster" />
              <ul className="column">
                <li>Genero/s: {movie.Genre}</li>
                <li>Director/es: {movie.Director}</li>
                <li>Escritor/es: {movie.Writer}</li>
                <li>Actores: {movie.Actors}</li>
                <li>Rating: {movie.imdbRating} imdB</li>
              </ul>
            </div>
          </div>
        );
      }
    }


function mapStateToProps (state){//recibe el estado de la store
    return {
        movie : state.movieDetail//devuelve el estado de la pelicula
    }

}

function mapDispatchToProps (dispatch){//recibe el dispatch
    return {
        getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
    }//recibe el id de la pelicula y despacha la accion

}


export default connect(mapStateToProps,mapDispatchToProps)(Movie);
//conecta el componente con el estado de la store y despacha la accion


//export default (Movie);