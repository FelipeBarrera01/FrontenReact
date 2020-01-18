import React, { Fragment } from "react";

function DetallesPedido({ pedido }) {
  const { cliente } = pedido;
  return (
    <Fragment>
      <li className="pedido">
        <div className="info-pedido">
          <p className="id">ID: 0192019201291201</p>
          <p className="nombre">
            Cliente: {cliente.nombre} {cliente.apellido}
          </p>

          <div className="articulos-pedido">
            <p className="productos">Artículos Pedido: </p>
            <ul>
              {pedido.pedido.map(articulos => (
                <li key={pedido._id + articulos.producto._id}>
                  <p>{articulos.producto.nombre}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="total">Total: ${pedido.total} </p>
        </div>
        <div className="acciones">
          <button type="button" class="btn btn-rojo btn-eliminar">
            <i className="fas fa-times"></i>
            Eliminar Pedido
          </button>
        </div>
      </li>
    </Fragment>
  );
}
export default DetallesPedido;
