import React from 'react';
import './Card.css';


export default function Card ({temp, min, max, name, img, onClose, id}) {
    return (
        
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btnClouse">X</button>
        </div>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <div className="row">

          <div className="card-temperatura">
              <spam>Temperatura</spam>
              <p>{Math.round(temp)}°</p>
          </div>



          </div>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <spam>Min</spam>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <spam>Max</spam>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"}  alt="logo" />
            </div>
          </div>
        </div>
      </div>
      
    );
};
