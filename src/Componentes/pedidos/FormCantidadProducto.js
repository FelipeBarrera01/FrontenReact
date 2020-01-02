import React from "react";

function FormCantidadProducto(props) {
  const { producto, restarProductos, aumentarProductos, index } = props;

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
          <i class="fas fa-plus"></i>
        </div>
        <button type="button" class="btn btn-rojo">
          <i class="fas fa-minus-circle" onClick={()=> aumentarProductos(index)}></i>
          Eliminar Producto
        </button>
      </div>
    </li>
  );
}
export default FormCantidadProducto;
