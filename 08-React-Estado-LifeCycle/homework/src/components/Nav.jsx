import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar';
import SearchBarSolo from './SearchBarSolo';
import './Nav.css';

export function Nav({onSearch , onSearchSolo}) {
  return (
    <nav className="navbar">
  <div className="container-fluid">
  <img className="navbar-brand" src={Logo} alt='logo'/>
  <h1>Henry - Weather App</h1>
    <div className="d-flex">
    <SearchBar onSearch={onSearch}/>
    <SearchBarSolo onSearchSolo={onSearchSolo}/>
    </div>
  </div>
</nav>
  )
};


