import React, { Fragment, useState, useEffect } from 'react';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function EditarCliente(props) {

    const {id} = props.match.params;

  const [cliente, datosCliente] = useState ({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    telefono: ""
  });
const consultarAPI = async () =>{
    const clienteConsulta = await clienteAxios.get(`/cliente/${id}`);
    datosCliente(clienteConsulta.data)
}
  useEffect(()=>{
    consultarAPI();
  }, []);
  const actualizarState = e => {
    datosCliente({
      ...cliente,
      [e.target.name]: e.target.value
    });
  };

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
  const actualizarCliente = e => {
      e.preventDefault();

      clienteAxios.put(`/clientes/${cliente._id}`, cliente).then( res =>{
        if(res.data.code === 11000){
            Swal.fire({
              type:'error',
              title:'Hubo un error',
              text: 'Ese cliente ya está registrado'
            })
          }else{
            Swal.fire(
              'Se actualizó correctamente',
              res.data.mensaje,
              'success'
            )
          }
          props.history.push('/');
      });
  }
  return (
    <Fragment>
      <form onSubmit={actualizarCliente}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Cliente"
            name="nombre"
            onChange={actualizarState}
            value={cliente.nombre}
          />
        </div>

        <div className="campo">
          <label>Apellido:</label>
          <input
            type="text"
            placeholder="Apellido Cliente"
            name="apellido"
            onChange={actualizarState}
            value={cliente.apellido}
          />
        </div>

        <div className="campo">
          <label>Empresa:</label>
          <input
            type="text"
            placeholder="Empresa Cliente"
            name="empresa"
            onChange={actualizarState}
            value={cliente.empresa}
          />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Cliente"
            name="email"
            onChange={actualizarState}
            value={cliente.email}
          />
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input
            type="email"
            placeholder="Teléfono Cliente"
            name="telefono"
            onChange={actualizarState}
            value={cliente.telefono}
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
export default withRouter(EditarCliente);
