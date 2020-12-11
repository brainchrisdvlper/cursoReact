import React from 'react';
import {
 BrowserRouter as Router,
 Route,
 Link,
 Switch
} from "react-router-dom";
import Ayuda from './components/Ayuda.jsx';
import Civilizations from './components/Civilizations.jsx';
import Contacto from './components/Contacto.jsx';
import Detalleciv from './components/Detalleciv.jsx';
import Inicio from './components/Inicio.jsx';
import Nosotros from './components/Nosotros.jsx';


function App() {
  return (
     <Router>
       <div className="container mt-5">
        <h1>Menu Navegacion</h1> 
       <hr/>
       <div className="btn-group">
        <Link to="/" className="btn btn-dark">
         Inicio
        </Link> 
        <Link to="/contacto" className="btn btn-dark">
          Contacto
        </Link>
        <Link to="/ayuda" className="btn btn-dark">
          Ayuda
        </Link>
        <Link to="/nosotros" className="btn btn-dark">
          Nosotros
        </Link>
        <Link to="/civilizaciones" className="btn btn-dark">
          civilizaciones
        </Link>
        </div>
        <hr/>
        <Switch>
          <Route path="/civilizaciones/:id">
            <Detalleciv/>
          </Route>
         <Route path="/" exact>
          <Inicio/>
        </Route> 
        <Route path="/contacto" >
          <Contacto/>
        </Route>
        <Route path="/ayuda" >
          <Ayuda/>
        </Route>
        <Route path="/nosotros">
        <Nosotros/>
        </Route>
         <Route path="/civilizaciones">
         <Civilizations/>
        </Route> 
        </Switch>
       </div>
     </Router>
  );
}

export default App;
