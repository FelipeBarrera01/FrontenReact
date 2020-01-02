import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';


function Cliente({ cliente }) {

  const { _id, nombre, apellido, empresa, email, telefono } = cliente;
  const eliminarCliente = idCliente =>{
    Swal.fire({
      title: 'Estás seguro?',
      text: "Un cliente eliminado no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
       clienteAxios.delete(`/clientes/${idCliente}`).then(res=>{
        Swal.fire(
          'Se agregó el cliente',
          res.data.mensaje,
          'success'
        )
       });
      }
    })
  }
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
        <Link to={`/clientes/editar/${_id}`} className="btn btn-azul">
          <i class="fas fa-pen-alt"></i>
          Editar Cliente
        </Link>
        <Link to={`/pedidos/nuevo/${_id}`} className="btn btn-amarillo">
          <i class="fas fa-plus"></i>
          Nuevo Pedido
        </Link>
        <button
          type="button"
          className="btn btn-rojo btn-eliminar"
          onClick={() => eliminarCliente(_id)}
        >
          <i className="fas fa-times"></i>
          Eliminar Cliente
        </button>
      </div>
    </li>
  );
}
export default Cliente;
