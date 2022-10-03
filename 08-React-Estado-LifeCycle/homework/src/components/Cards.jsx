import React from 'react';
import './Cards.css';
import Card from './Card.jsx';

export default function Cards({ cities, onClose}) {

    return (
      <div className="cards">
        {cities.map((c) => (//recorre el array de ciudades y por cada ciudad crea un componente Card
          <Card
            key={c.id}
            temp={c.temp}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}//funcion que recibe el id de la ciudad a cerrar
            id={c.id}
          />
        ))}
      </div>
    );
}
