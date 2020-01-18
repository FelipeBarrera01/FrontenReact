import React, {useState, useContext, } from 'react';  
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import {withRouter} from 'react-router-dom';
import CRMContext from '../../context/CRMContext';

function Login(props){
    const [auth, guardarAuth] = useContext(CRMContext);
    const [credenciales, guardarCredenciales] = useState({});


    const iniciarSesion = async e =>{
        e.preventDefault();

        try {
            const respuesta = await clienteAxios.post('/iniciar-sesion', credenciales);
            const {token} = respuesta.data;
            localStorage.setItem('token', token);


            guardarAuth({
                token,
                auth: true
            })


            Swal.fire(
                'Login Correcto',
                'Has iniciado sesión',
                'success'
            )
            props.history.push('/');
        } catch (error) {
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: error.response.data.mensaje
            });

        }
    }
    const leerDatos = e =>{
        guardarCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value
        });
    }
    return(
    <div className="login">
        <h2>Inicisar sesión </h2>
        <div className="contenedor-formulario">
            <form onSubmit={iniciarSesion}>
                <div className="campo">
                    <label>Email</label>
                    <input
                     type="text"
                    name="email"
                    placeholder="Email para iniciar sesión"
                    required
                    onChange={leerDatos}
                    />
                </div>
                <div className="campo">
                    <label>Password</label>
                    <input
                     type="password"
                    name="password"
                    placeholder="Password para iniciar sesión"
                    required
                    onChange={leerDatos}
                    />
                </div>
                <input type="submit" value="Iniciar sesión" className="btn btn-verde btn-block"/>
            </form>
        </div>
    </div>
    )
}
export default  withRouter(Login);