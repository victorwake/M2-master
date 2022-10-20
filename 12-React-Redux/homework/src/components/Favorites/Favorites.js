import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions/index";
import { FcPlus } from 'react-icons/fc';

export class ConnectedList extends Component {

  render() {
    return (
      <div >
        <div className="h2">
        <h2>Películas Favoritas</h2>
        </div>
        <ul className="containerFav" >
          {
              // this.props.movieFavorite?.map(movie => (
                this.props.movies && this.props.movies.map(movie => (
              <li className="listaPeliculas" key={movie.id}>
                <Link className="link" to={`/movie/${movie.id}`}>
                  <img className="img" src= {movie.poster} height={300}  />
                </Link>
                <div>
                  <b className="titulo">{movie.title}</b>
                </div>
                
                <div className="boton">
                <button className="btn" onClick={() => this.props.removeMovieFavorite(movie.id)}><FcPlus className="ico" />ELIMINAR</button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    movies: state.moviesFavourites
  }
}
function mapDispatchToProps(dispatch){
    return{
      removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ConnectedList);

//export default (ConnectedList);
