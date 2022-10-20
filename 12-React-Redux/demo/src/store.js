import { createStore, applyMiddleware } from 'redux';//hay que  hacer npm install redux --save para instalar redux
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk'//hay que hacer un npm install redux-thunk para usarlo

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),//sirve para habilitar la extension de redux en el navegador
  applyMiddleware(thunkMiddleware),//sirve para despachar funciones asincronas, como por ej. un fetch que hace una consulta a una API
);

export default store;
