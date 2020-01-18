import React, {useEffect, useState, Fragment, useContext } from 'react';

import clienteAxios from '../../config/axios';

import Cliente from './Cliente';

import { Link ,withRouter} from 'react-router-dom'; 
import {CRMContext} from '../../context/CRMContext';

function Clientes(props){
    const [clientes, guardarClientes] = useState([]);
    const [auth, guardarAuth] = useContext(CRMContext);


    useEffect(()=>{
        if(auth.token !== ''){
            const consultarAPI = async () =>{

                try {
                    const clientesConsulta = await clienteAxios.get('clientes', {
                        headers:{
                            Authorization: `Bearer ${auth.token}`
                        }
                    });
                    guardarClientes(clientesConsulta.data);
                } catch (error) {
                    if(error.response.status = 500){
                        props.history.push('/iniciar-sesion')
                    }
                }

             
        
          
            
            }
            consultarAPI();
        }else{
            props.history.push('/iniciar-sesion');
        }
      
      
    },[clientes]);

    return(
        <Fragment>
            <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente"> <i class="fas fa-plus-circle"></i>
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
export default withRouter(Clientes);