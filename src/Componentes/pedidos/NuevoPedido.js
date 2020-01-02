import React, { useState, useEffect, Fragment } from "react";
import clienteAxios from "../../config/axios";
import FormBuscarProducto from './FormBuscarProducto'
import Swal from 'sweetalert2';
import  FormCantidadProducto from './FormCantidadProducto';
function NuevoPedido(props) {
  const { id } = props.match.params;
  const [cliente, guardarCliente] = useState({});
  const [busqueda, guardarBusqueda] = useState({});
  const [productos, guardarProductos] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const resultado = await clienteAxios.get(`/clientes/${id}`);
      guardarCliente(resultado.data);
    };
    consultarAPI();
  }, []);
  const buscarProducto = async e => {
    e.preventDefault();
     const resultadoBusqueda = await clienteAxios.post(`/productos/busqueda/${busqueda}`);

     if(resultadoBusqueda.data[0]){
         let productoResultado = resultadoBusqueda.data[0];
         productoResultado.producto = resultadoBusqueda.data[0]._id;
         productoResultado.cantidad = 0;
         guardarProductos([...productos, productoResultado])
     }else{
        Swal.fire({
            type: 'error',
            title: 'No resultados',
            text:'No hay resultados'
        })
     }

  }
  const leerDatosBusqueda = e => {
    guardarBusqueda(e.target.value);
  }
  const restarProductos = i =>{
    const todosProductos = [...productos];
     if(todosProductos[i].cantidad === 0) return;
     todosProductos[i].cantidad--;
     guardarProductos(todosProductos)
  }
  const aumentarProductos = i =>{
    const todosProductos = [...productos];
    todosProductos[i].cantidad++;
    guardarProductos(todosProductos)
  }
  return (
    <Fragment>
      <h2>Nuevo Pedido</h2>

      <div class="ficha-cliente">
        <h3>Datos de Cliente</h3>
        <p>
          Nombre:
          {cliente.nombre} {cliente.apellido}
        </p>
        <p>Telefono: {cliente.telefono}</p>
      </div>
      <div></div>
        <FormBuscarProducto
            buscarProducto={buscarProducto}
            leerDatosBusqueda={leerDatosBusqueda}
        />
      <ul class="resumen">
        {productos.map((producto, index)=>(
          <FormCantidadProducto
           key={producto.producto}
           producto={producto}
           restarProductos={restarProductos}
           aumentarProductos={aumentarProductos}
           index={index}
           />
  ))}
        
      </ul>
      <div class="campo">
        <label>Total:</label>
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          readonly="readonly"
        />
      </div>
      <div class="enviar">
        <input type="submit" class="btn btn-azul" value="Agregar Pedido" />
      </div>
    </Fragment>
  );
}
export default NuevoPedido;
