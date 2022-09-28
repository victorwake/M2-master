import React, { useState } from "react";
import './searchBar.css';

export default function SearchBar({onSearch}) {
  const searchClic = () => {
    return onSearch.onSearch("Buscando...");
  }
  return (
    <div class="search">
      <div class="form-inline md-form mr-auto mb-4">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Ciudad..."
          aria-label="Search"
        />
        <button onClick={searchClic} class="btn btn-success">Search</button>
      </div>
    </div>
  );
}
