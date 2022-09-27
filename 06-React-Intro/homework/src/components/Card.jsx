import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
    <div className="card" style={{ width: "18rem" }}>
      
      <div className="card-body">
      <div className="ciudades">
        <h5 className="card-title">{props.name}</h5>
        <button className="btn-clouse" onClick={props.onClose}>X</button>
      </div>
      
      <div className="temperaturas">
      <div className="card-min">
        <h6>Min</h6>
        <span>{Math.round(props.min - 273)}°</span>
      </div>
      <div className="card-max">
        <h6>Max</h6>
        <span>{Math.ceil(props.max - 273)}°</span>
      </div>

      <div className="img-card">
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          className="card-img"
          alt="Tiempo"/>
        </div>
      </div>
      </div>
    </div>
  );
}

// return (
//   <div key={props.name} className='contenedor'>
//     <button onClick={props.onClose} id='closeButton'>X</button>
//     <h1>{props.name}</h1>
//     <div className='todo'>
//       <div className='numbers'>
//         <div className='h4'>
//           <h4> Max </h4>
//           <h5>{props.max}</h5>        
//         </div>
//         <div className='p'>
//           <h4> Min </h4>
//           <h5>{props.min}</h5>
//         </div>
//       </div>
//       <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='imagen del clima' className='imagen'/>
//       </div>
//   </div>)
// };