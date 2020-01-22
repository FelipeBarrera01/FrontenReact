import React, { Fragment, useState, useContext } from 'react';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import {CRMContext} from '../../context/CRMContext';


function nuevoCliente ({history}) {

  const [auth, guardarAuth] = useContext(CRMContext);

  const [cliente, guardarCliente] = useState({
    nombre:'',
    apellido:'',
    empresa:'',
    email:'',
    telefono:''
  });
  const actualizarState = e => {
    guardarCliente({
      ...cliente,
      [e.target.name]: e.target.value
    });
  };
  const agregarCliente = e =>{
    e.preventDefault();
    clienteAxios.post('/clientes', cliente).then(res =>{
      if(res.data.code === 11000){
        Swal.fire({
          type:'error',
          title:'Hubo un error',
          text: 'Ese cliente ya está registrado'
        })
      }else{
        Swal.fire(
          'Se agregó el cliente',
          res.data.mensaje,
          'success'
        )
      }
        history.push('/');
    });
  }
  const validarCliente = () => {
    const { nombre, apellido, email, empresa, telefono } = cliente;
    let valido =
      !nombre.length ||
      !apellido.length ||
      !email.length ||
      !empresa.length ||
      !telefono.length;
    return valido;
  };

  if(!auth.auth && (localStorage.getItem('token') === auth.token)){
    history.push('/iniciar-sesion')
  }

  return (

    <Fragment>
      <form onSubmit={agregarCliente}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Cliente"
            name="nombre"
            onChange={actualizarState}
          />
        </div>

        <div className="campo">
          <label>Apellido:</label>
          <input
            type="text"
            placeholder="Apellido Cliente"
            name="apellido"
            onChange={actualizarState}
          />
        </div>

        <div className="campo">
          <label>Empresa:</label>
          <input
            type="text"
            placeholder="Empresa Cliente"
            name="empresa"
            onChange={actualizarState}
          />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Cliente"
            name="email"
            onChange={actualizarState}
          />
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input
            type="email"
            placeholder="Teléfono Cliente"
            name="telefono"
            onChange={actualizarState}
          />
        </div>

        <div className="enviar">
          <input
            type="submit"
            class="btn btn-azul"
            value="Agregar Cliente"
            disabled={validarCliente()}
          />
        </div>
      </form>
    </Fragment>
  );
}
export default withRouter(nuevoCliente);
