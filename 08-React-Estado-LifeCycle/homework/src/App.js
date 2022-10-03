// import React from 'react';
import './App.css';
import {Nav} from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import Cards1 from './components/Cards1.jsx';
import React from 'react';

export default function App(){
//                            De esta manera no ahce falta importarlo arriba
  const [cities, setCities] = React.useState([]);//Se agregó el useState
  const [cities1, setCities1] = React.useState([])
  // Cities = []
  // SetCities => f(Que actualiza el estado)

  function onSearch(city) {
    var apiKey = '4ae2636d8dfbdc3044bede63951a019b';//API KEY
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)//fetch para obtener los datos de la API
      .then(response => response.json())//convierte la respuesta a json
      .then((resource) => {//el json se guarda en la variable resource
        if(resource.main !== undefined){//si el json tiene la propiedad main
          const city = {//crea un objeto ciudad
            min: Math.round(resource.main.temp_min),//convierte la temperatura minima a entero
            max: Math.round(resource.main.temp_max),//convierte la temperatura maxima a entero
            img: resource.weather[0].icon,//guarda el icono del clima
            id: resource.id,//guarda el id de la ciudad
            wind: resource.wind.speed,//guarda la velocidad del viento
            temp: resource.main.temp,//guarda la temperatura actual
            name: resource.name,//guarda el nombre de la ciudad
            weather: resource.weather[0].main,//guarda el clima actual
            clouds: resource.clouds.all,//guarda la nubosidad
            latitud: resource.coord.lat,//guarda la latitud
            longitud: resource.coord.lon//guarda la longitud
          };
          setCities(oldCities => [...oldCities, city]); //agrega la ciudad al array de ciudades, usando el 
          //hook useState y su funcion setCities para actualizar el estado de cities y su funcion onSearch 
          //para agregar una ciudad al array de ciudades en el estado de cities y su funcion
          // Importante
          //setCities([city])//asi se usa si quiero recargar la informacion en la misma card
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onSearchSolo(city1) {
    var apiKey1 = '4ae2636d8dfbdc3044bede63951a019b';//API KEY
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey1}&units=metric`)//fetch para obtener los datos de la API
      .then(response => response.json())//convierte la respuesta a json
      .then((resource) => {//el json se guarda en la variable resource
        if(resource.main !== undefined){//si el json tiene la propiedad main
          const city1 = {//crea un objeto ciudad
            min: Math.round(resource.main.temp_min),//convierte la temperatura minima a entero
            max: Math.round(resource.main.temp_max),//convierte la temperatura maxima a entero
            img: resource.weather[0].icon,//guarda el icono del clima
            id: resource.id,//guarda el id de la ciudad
            wind: resource.wind.speed,//guarda la velocidad del viento
            temp: resource.main.temp,//guarda la temperatura actual
            name: resource.name,//guarda el nombre de la ciudad
            weather: resource.weather[0].main,//guarda el clima actual
            clouds: resource.clouds.all,//guarda la nubosidad
            latitud: resource.coord.lat,//guarda la latitud
            longitud: resource.coord.lon//guarda la longitud
          };
          setCities1([city1]); //agrega la ciudad al array de ciudades, usando el 
          //hook useState y su funcion setCities para actualizar el estado de cities y su funcion onSearch 
          //para agregar una ciudad al array de ciudades en el estado de cities y su funcion
          // Importante
          //setCities([city])//asi se usa si quiero recargar la informacion en la misma card
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));//Se agregó el setCities
  }

  function onClose1(id) {
    setCities1(oldCities => oldCities.filter(c => c.id !== id));//filter devuelve un array con los 
    //elementos que cumplen la condicion que se le pasa como parametro id
  }


    return (
      <div className="App">
        <Nav onSearch={onSearch} onSearchSolo={onSearchSolo}/>
        <Cards 
          cities={cities} onClose={onClose} 
        />
        <Cards1
          cities1={cities1} onClose={onClose1}
        />
      </div>
    );
}
