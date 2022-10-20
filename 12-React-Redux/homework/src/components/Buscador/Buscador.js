import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from "../../actions/index"
import { FcPlus } from 'react-icons/fc';
import {FaSearch} from "react-icons/fa";





export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });//cada vez que se escribe en el input se actualiza el estado
  }
  handleSubmit(event) {
    this.props.getMovies(this.state.title)
    event.preventDefault();
  }

  render() {
    const { title } = this.state;

    return (
      <div className="search">
        <div className="h2">
        <h2></h2>
        </div>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="buscador">
            <label className="label" htmlFor="title"></label>
            <input className="input"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          <button type="submit" className="searchPadre"><FaSearch size={20} className="search" /></button>
          </div>
        </form>
        <ul className="listaPeliculasContenedor">
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
        {
          this.props.movies && this.props.movies.map(movie => (
            <li key={movie.imdbID} className="listaPeliculas">
              {/* <b className="titulo">{movie.Title}</b> */}
              <Link to={'/movie/' + movie.imdbID}>
                <img className="img" src= {movie.Poster} height={300}  />
              </Link>
              <div>
              <b className="titulo">{movie.Title}</b>
              </div>
              <div className="boton">
              <button className="btn" onClick={() => this.props.addMovieFavorite({ 
                title: movie.Title, 
                id: movie.imdbID, 
                poster: movie.Poster })}>
                  <FcPlus className="ico"/>FAVORITOS</button>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    ); 
  }
}


//mapStateToProps recibe como parametro state y nos devuelvo un objecto con parte del 
//state que queremos, en este caso usamos la key 'movies' (accedemos a ella en nuestro 
//componente como this.props.movies) y su value es la parte del estado que queremos traer, 
//moviesLoaded
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}


//mapDispatchToProps recibe como parametro una funcion, la llamamos dispatch, y nos devuelve 
//un objecto, con las acciones que queremos enviar a nuestro store. Los nombres son arbitrarios, 
//son los que usaremos para acceder a estos en nuestro componentes via props. Cada funcion nos 
//devuelve la funcion dispatch que recibe como parametro la action que queremos enviar al store, 
//en nuestro caso son addMovieFavorite y getMovies que tenemos en nuestra carpeta actions. Los 
//parametros que recibe cada function son los payloads que usamos en nuestra action.
// function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: title => dispatch(addMovieFavorite(title)),
//     getMovies: title => dispatch(getMovies(title))
//   };
// }

export default connect(
  mapStateToProps,
  {addMovieFavorite, getMovies }
)(Buscador);

// // export default Buscador;



// export function Buscador(props){
//   const [title, setTitle] = useState('')

//   let handleChange = (e) => {
//     setTitle(e.target.value)
//   }

//   let handleSubmit = (e) => {
//     e.preventDefault()
//   }

//   return (
//     <div className="search">
//         <div className="h2">
//         <h2></h2>
//         </div>
//         <form className="form-container" onSubmit={(e) => props.handleSubmit(e)}>
//           <div className="buscador">
//             <label className="label" htmlFor="title"></label>
//             <input className="input"
//               type="text"
//               id="title"
//               autoComplete="off"
//               value={title}
//               onChange={(e) => props.handleChange(e)}
//             />
//           <button type="submit" className="searchPadre"><FaSearch size={20} className="search" /></button>
//           </div>
//         </form>
//         <ul className="listaPeliculasContenedor">
//          {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
//         {
//           props.movies && props.movies.map(movie => (
//             <li key={movie.imdbID} className="listaPeliculas">
//               {/* <b className="titulo">{movie.Title}</b> */}
//               <Link to={'/movie/' + movie.imdbID}>
//                 <img className="img" src= {movie.Poster} height={300}  />
//               </Link>
//               <div>
//               <b className="titulo">{movie.Title}</b>
//               </div>
//               <div className="boton">
//               <button className="btn" onClick={() => props.addMovieFavorite({ title: movie.Title, id: movie.imdbID, poster: movie.Poster })}><FcPlus className="ico" />FAVORITOS</button>
//               </div>
//             </li>
            
//           ))
//         }
//         </ul>
//       </div>
//   )

// }

// //mapStateToProps recibe como parametro state y nos devuelvo un objecto con parte del 
// //state que queremos, en este caso usamos la key 'movies' (accedemos a ella en nuestro 
// //componente como this.props.movies) y su value es la parte del estado que queremos traer, 
// //moviesLoaded
// function mapStateToProps(state) {
//   return {
//     movies: state.moviesLoaded
//   };
// }


// //mapDispatchToProps recibe como parametro una funcion, la llamamos dispatch, y nos devuelve 
// //un objecto, con las acciones que queremos enviar a nuestro store. Los nombres son arbitrarios, 
// //son los que usaremos para acceder a estos en nuestro componentes via props. Cada funcion nos 
// //devuelve la funcion dispatch que recibe como parametro la action que queremos enviar al store, 
// //en nuestro caso son addMovieFavorite y getMovies que tenemos en nuestra carpeta actions. Los 
// //parametros que recibe cada function son los payloads que usamos en nuestra action.
// function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
//     getMovies: title => dispatch(getMovies(title))
//   };
// }