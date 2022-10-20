import './Timer.css';
import React, { useState, useEffect, useRef   } from 'react';

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  function toggle() {
    // setActivo(!activo);// Esto no es bueno porque no se actualiza el estado, si se toca varias veces solo cambia 1 vez
    setActivo(oldValue => !oldValue);//Buena practica
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
    myRef.current.value = 0;
    
  }

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
}

useEffect(() => {
  let intervalo = null;
  if (activo && tipo === 'Contador') {
    intervalo = setInterval(() => {//setInterval es una funcion que se ejecuta cada cierto tiempo, setInterval ya viene con javascript
      setSegundos(segundos => segundos + 1);//setSegundos es una funcion que actualiza el estado
    }, 1000);//1000 milisegundos = 1 segundo, setea el intervalo de tiempo cada 1 segundo, sumando 1 a segundos
  }
  if (activo && tipo === 'Cuenta Regresiva') {
    intervalo = setInterval(() => {
      setSegundos(segundos => segundos - 1);
    }, 1000);
  }
  if (!activo && segundos !== 0 && tipo === 'Contador') {//Si no esta activo y segundos es diferente de 0 y el tipo es contador 
    //entonces se ejecuta el clearInterval que detiene el intervalo de tiempo que se ejecuta cada 1 segundo
    clearInterval(intervalo);
  }
  if (segundos === 0 && tipo === 'Cuenta Regresiva') {
    reset();
    clearInterval(intervalo);
  }

  return () => clearInterval(intervalo);//limpia el intervalo cuando se desmonta el componente Timer para evitar errores
}, [activo, segundos, tipo]);

const myRef = useRef(null);

function agregaSegundos() {
  // `current` apunta al elemento de entrada de texto montado
  if(myRef.current.value <= 0) {
    alert('No puedes agregar 0 segundos o valores negativos');
  } else {
  let ref = myRef.current.value
  setSegundos(Number(ref))}//Number convierte el string a numero para que no concatene sumando
}
  
  return (
    <div className="app">
      <div className="time">
        {segundos}s
      </div>
      <div className="row">
        {/*activo --> button button-primary button-primary-active
        no activo --> button button-primary button-primary-inactive   aca debajo evalua y asigna a la clase active o inactive*/}
      <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} 
    
      onClick={toggle}>{activo ? 'Pausa' : 'Inicio'}
        </button>

      <button className="button" onClick={reset}>
        Reset
      </button>
      
      {/*La variable tipo cambia de contador a cuenta regresiva con la funcion {cambioTipo} */}
      <button className="button" onClick={cambioTipo}>
        {tipo}
      </button>

      </div>
    <div className="row">
    {tipo === 'Cuenta Regresiva'  ?<input ref={myRef} type="number" /> :null}{/*//myRef es una referencia al input para poder acceder a su valor*/}
      <button className="button" onClick={agregaSegundos}>
        Agrega Segundos
      </button>
      </div> 
    </div>
  );
};

export default Timer;
