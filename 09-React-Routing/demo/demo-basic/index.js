import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, useParams, HashRouter as Router } from 'react-router-dom';

import About from './About.jsx';
import Ejemplo from './Ejemplo.jsx';
import NavBar from './NavBar.jsx';

function Home(props) {
  console.log(props)

  let params = useParams();// params es un objeto con los parámetros de la ruta
  console.log('soy  los parametros de la ruta', params);

    var apiKey = '4ae2636d8dfbdc3044bede63951a019b';//API KEY
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${params.ciudad}&appid=${apiKey}&units=metric`)//fetch para obtener los datos de la API
      .then(response => response.json())//convierte la respuesta a json
      .then((resource) => {//el json se guarda en la variable resource
        console.log(resource)
  });

  return (
    <div>
      <h2>Home, Soy Henry!! ciudad de: {params.ciudad}</h2>
    </div>
  );
};

// let params = useParams();
// console.log("soy params", params)

//   var apiKey = '4ae2636d8dfbdc3044bede63951a019b';//API KEY
//   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${params.name}&appid=${apiKey}&units=metric`)//fetch para obtener los datos de la API
//     .then(response => response.json())//convierte la respuesta a json
//     .then((resource) => {//el json se guarda en la variable resource
//       console.log(resource)
// });

// return (
//   <div>
//     <h2>Home, Soy Henry!! ciudad de: params.id</h2>
//   </div>
// );
// };

const Root = (
  <Router>
    <NavBar />
    {/* <Switch> */}
      <Route  path="/:id/:ciudad" render={({location})=><Home location = {location}/>} />
        {/* <Home />
      </Route> */}
      {/* <Route path="/about/other">
        <h2>About Other</h2>
      </Route> */}
      <Route path="/about">
        <About />
      </Route>
      <Route path="/aboutttttt">
        <h2>Aboutttttt</h2>
      </Route>
      <Route path="/about/other">
        <h2>About Other</h2>
      </Route>
      <Route path="/ejemplo" render={()=><Ejemplo nombre="Victor" apellido="Pinto"/>}/>
        {/* <Ejemplo nombre="Toni" apellido="Tralice"/>
      </Route> */}
      <Route path="/">
        <h2>Default if no match</h2>
      </Route>
    {/* </Switch> */}
  </Router>
);

render(Root, document.querySelector('#app'));

