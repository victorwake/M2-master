import React from 'react';
import './Cards.css';
import Card1 from './Card.jsx';

export default function Cards1({ cities1, onClose }) {
    return (
      <div className="cards">
        {cities1.map((c1) => (//recorre el array de ciudades y por cada ciudad crea un componente Card
          <Card1
            key={c1.id}
            temp={c1.temp}
            max={c1.max}
            min={c1.min}
            name={c1.name}
            img={c1.img}
            onClose={() => onClose(c1.id)} //funcion que recibe el id de la ciudad a cerrar
            id={c1.id}
          />
        ))}
      </div>
    );
}
