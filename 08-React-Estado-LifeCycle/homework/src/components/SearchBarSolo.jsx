import React from "react";
import "./SearchBarSolo.css";

export default function SearchBar({onSearchSolo}) {
  const [city, setCity] = React.useState("");
  return (
    <div>
    <form onSubmit={(event) => {
      event.preventDefault(); //evita que se recargue la pagina
      onSearchSolo(city); //ejecuta la funcion onSearch que recibe por props
      setCity(''); //limpia el input
    }}>
    <div className="search">
      <div className="form-inline md-form mr-auto mb-4">
      <input
      className="form-control mr-sm-2"
        type="text"
        placeholder="Ciudad..."
        value={city} //el valor del input es el estado de la variable city
        onChange={event => setCity(event.target.value)} //actualiza el estado de city
      />
      <input className="btn1 btn-success" type="submit" value="Buscar" 
      />
      </div>
    </div>
    </form>
    </div>
  );
}


