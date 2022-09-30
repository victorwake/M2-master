import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

export function Nav({onSearch}) {
  return (
    <nav class="navbar">
  <div class="container-fluid">
  <img class="navbar-brand" src={Logo} alt='logo'/>
  <h1>Henry - Weather App</h1>
    <form class="d-flex">
    <SearchBar onSearch={onSearch}/>
    </form>
  </div>
</nav>
  )
};


