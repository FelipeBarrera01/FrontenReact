import React, { Fragment, useState } from "react";

function nuevoCliente() {
  const [cliente, guardarCliente] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    telefono: ""
  });
  const actualizarState = e => {
      guardarCliente({
          ...cliente,
          [e.target.name] : e.target.value
      });
  };
  return (
    <Fragment>
      <form>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Cliente"
            name="nombre"
            onChange="{actualizarState}"
          />
        </div>

        <div className="campo">
          <label>Apellido:</label>
          <input
            type="text"
            placeholder="Apellido Cliente"
            name="apellido"
            onChange="{actualizarState}"
          />
        </div>

        <div className="campo">
          <label>Empresa:</label>
          <input
            type="text"
            placeholder="Empresa Cliente"
            name="empresa"
            onChange="{actualizarState}"
          />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Cliente"
            name="email"
            onChange="{actualizarState}"
          />
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input
            type="email"
            placeholder="Teléfono Cliente"
            name="telefono"
            onChange="{actualizarState}"
          />
        </div>

        <div className="enviar">
          <input
            type="submit"
            class="btn btn-azul"
            value="Agregar Cliente"
            onChange="{actualizarState}"
          />
        </div>
      </form>
    </Fragment>
  );
}
export default nuevoCliente;
