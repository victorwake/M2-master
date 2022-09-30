import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
    <div class="search">
      <div class="form-inline md-form mr-auto mb-4">
      <input
      class="form-control mr-sm-2"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input class="btn btn-success" type="submit" value="Agregar" />
      </div>
    </div>
    </form>
  );
}


