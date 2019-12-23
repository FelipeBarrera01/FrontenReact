import React, {useEffect, useState, Fragment } from 'react';

import clienteAxios from '../../config/axios';

import Cliente from './Cliente';

import { Link } from 'react-router-dom'; 
function Clientes(){
    const [clientes, guardarClientes] = useState([]);
    const consultarAPI = async () =>{
        const clientesConsulta = await clienteAxios.get('clientes');
        guardarClientes(clientesConsulta.data);
    }
    useEffect(()=>{
        consultarAPI();
    },[]);

    return(
        <Fragment>
            <Link to={"nuevo-cliente.html"} className="btn btn-verde nvo-cliente"> <i class="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>
            <ul className="listado-Clientes">
                {clientes.map(cliente => (
                    <Cliente
                    key={cliente._id}
                        cliente={cliente}
                    />
                ))}
            </ul>
        </Fragment>
    )
}