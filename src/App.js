import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Componentes/layout/Header';
import Navegacion from './Componentes/layout/Navegacion';
import Clientes from './Componentes/clientes/Clientes';
import NuevoCliente from './Componentes/clientes/NuevoCliente';
import Productos from './Componentes/productos/Productos';
import Pedidos from './Componentes/pedidos/Pedidos';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <div class="grid contenedor contenido-principal">
          <Navegacion />
          <main class="caja-contenido col-9">
              <Switch>
                  <Route exact path="/" component={Clientes}/>
                  <Route exact path="/clientes/nuevo" component={NuevoCliente}/>
                  <Route exact path="/productos" component={Productos}/>
                  <Route exact path="/pedidos" component={Pedidos}/>
              </Switch>
          </main>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
