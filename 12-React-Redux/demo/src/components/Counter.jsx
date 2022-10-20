import React, { Component } from 'react';
import store from '../store.js';
import * as actionsCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index.js';
import axios from 'axios';


const Counter = ({ counter, increment, decrement, reset, fetchPost}) => (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>
          +
        </button>
        {' '}
        <button onClick={decrement}>
          -
        </button>
        {' '}
        <button onClick={reset}>
          Reset
        </button>
        <button onClick={() => fetchPost(counter)}>
          Fetch
        </button>
      </p>
    )

const mapStateToProps = (state) => ({//trae del estado global el valor de counter y lo asigna a counter(get)
  counter: state.count,
});

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
//   reset: () => dispatch(reset()),
//   fetchPost: (counter) => dispatch(fetchPost(counter))
// }); es lo que hace internamente bindActionCreators cuando se le pasa un objeto con las acciones
//que se quieren usar en el componente
function mapDispatchToProps(dispatch) {//trae las acciones y las asigna a las props del componente Counter 
  return bindActionCreators(actionsCreators, dispatch);//bindActionCreators recibe un objeto con las acciones que se quieren usar en el componente y el dispatch
  //y retorna un objeto con las acciones que se pueden usar en el componente como props y que al ser llamadas ejecutan el dispatch de la accion
  //que se le pasa como parametro a la funcion que se llama en el componente
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);//conecta el componente con el estado global
// mapDispatchToProp es opcional, si no se pasa como segundo parametro, el componente recibe por props el dispatch
// por ej. {increment, decrement} y hay que importarlas arriba de actionsCreators
