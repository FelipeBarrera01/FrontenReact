import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Componentes/layout/Header';
import Navegacion from './Componentes/layout/Navegacion';
import Clientes from './Componentes/clientes/Clientes';
import NuevoCliente from './Componentes/clientes/NuevoCliente';
import EditarCliente from './Componentes/clientes/EditarCliente';
import Productos from './Componentes/productos/Productos';
import EditarProducto from './Componentes/productos/EditarProductos';
import NuevoProducto from './Componentes/productos/EditarProductos';
import Pedidos from './Componentes/pedidos/Pedidos';
import NuevoPedido from './Componentes/pedidos/NuevoPedido';

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
                  <Route exact path="/clientes/editar/:id" component={EditarCliente} />
                  <Route exact path="/productos" component={Productos}/>
                  <Route exact path="/productos/nuevo" component={NuevoProducto}/>
                  <Route exact path="/productos/editar/:id" component={EditarProducto}/>
                  <Route exact path="/pedidos" component={Pedidos}/>
                  <Route exact path="/pedidos/nuevo/:id" component={NuevoPedido} />
              </Switch>
          </main>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
