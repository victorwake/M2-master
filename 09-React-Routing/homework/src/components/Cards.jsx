
import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  cities.forEach(element => {
    console.log(element.id)
  });
  return (
    <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}