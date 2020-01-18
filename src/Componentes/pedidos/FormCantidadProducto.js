import React from "react";

function FormCantidadProducto(props) {
  const { producto, restarProductos, aumentarProductos, index , eliminarProductoPedido} = props;

  return (
    <li>
      <div class="texto-producto">
        <p class="nombre">{producto.nombre}</p>
        <p class="precio">{producto.precio}</p>
      </div>
      <div class="acciones">
        <div class="contenedor-cantidad">
          <i class="fas fa-minus" onClick={()=> restarProductos(index)}></i>
          <p>{producto.cantidad}</p>
          <i class="fas fa-plus" onClick={()=> aumentarProductos(index)}></i>
        </div>
        <button onClick={()=> eliminarProductoPedido(producto._id)} type="button" class="btn btn-rojo">
          <i class="fas fa-minus-circle" ></i>
          Eliminar Producto
        </button>
      </div>
    </li>
  );
}
export default FormCantidadProducto;
