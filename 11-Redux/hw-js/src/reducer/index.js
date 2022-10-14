const { INCREMENTO, DECREMENTO, INCREMENTOIMPAR, INCREMENTOASYNC } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  switch (action.type) {
    case INCREMENTO:
      return { contador: state.contador + 1 };
    case DECREMENTO:
      return { contador: state.contador - 1 };
    case INCREMENTOASYNC:
      return { contador: state.contador + 1 };
    case INCREMENTOIMPAR:
      return { contador: state.contador % 2 === 1? state.contador +2 : state.contador};    
    default:
      return state;
  }
}

// function contador(state = initialState, action) {
//   if(action.type === INCREMENTO) {
//     return { contador: state.contador + 1 };
//   }
//   if(action.type === DECREMENTO) {
//     return { contador: state.contador - 1 };
//   }
//   if(action.type === INCREMENTOIMPAR) {
//       return { contador: state.contador % 2 === 1? state.contador +2 : state.contador 
//     }
//   }
//   if(action.type === INCREMENTOASYNC) {
//     return { contador: state.contador + 1 };
//   }
//   return state;
// }

module.exports = contador;

