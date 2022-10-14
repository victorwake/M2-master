const { createStore } = require('redux');// Creamos el Store:
const contador = require('./reducer');//reduce
const { incremento, decremento, incrementoAsync, incrementoImpar } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
const store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
//Primer parametro el REDUCER
let valor = document.getElementById('valor');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  let actual = store.getState().contador;
  valor.innerText = actual

}

// Ejecutamos la funcion 'renderContador':
renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(renderContador);


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
document.getElementById('incremento').onclick = ()=> store.dispatch(incremento());


document.getElementById('decremento').onClick = () => store.dispatch(decremento());


document.getElementById('incrementoAsync').onclick = () => {setTimeout(() => {
  store.dispatch(incrementoAsync())}, 3000);
}

document.getElementById('incrementoImpar').onclick = () => {store.dispatch (incrementoImpar())
}



