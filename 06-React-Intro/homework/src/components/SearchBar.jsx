import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  const searchClic = () => {
    return props.onSearch("Buscando...");
  }
  return (
    <div>
      <div class="form-inline md-form mr-auto mb-4">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={searchClic} class="btn">Search</button>
      </div>
    </div>
  );
}
