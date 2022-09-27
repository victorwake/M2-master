import React from 'react';
import Card from './Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map


return (
  <div className='cards'>
    {
      props.cities.map (city => { return (<Card 
        id={city.id}
        max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}
        img={city.weather[0].icon}
        onClose={() => alert(city.name)}
      />)})
    }
  </div>)
};















//   return (
//     <div className="cards">
//       {props.cities.map((city) => (
//         <cards>
//           <Card name={city.name} min={city.main.temp_min} max={city.main.temp_max} img={city.weather[0].icon} onClose={props.onClose} />
//         </cards>
//       ))}
//     </div>
    
//   );
// };