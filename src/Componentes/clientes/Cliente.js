import React from "react";

function Cliente({ cliente }) {
  const { _id, nombre, apellido, empresa, email, telefono } = cliente;
  return (
    <li class="cliente">
      <div className="info-cliente">
        <p className="nombre">
          {nombre} {apellido}
        </p>
        <p className="empresa">{empresa}</p>
        <p>{email}</p>
        <p>{telefono}</p>
      </div>
      <div class="acciones">
        <a href="#" className="btn btn-azul">
          <i class="fas fa-pen-alt"></i>
          Editar Cliente
        </a>
        <button type="button" className="btn btn-rojo btn-eliminar">
          <i className="fas fa-times"></i>
          Eliminar Cliente
        </button>
      </div>
    </li>
  );
}
export default Cliente;
