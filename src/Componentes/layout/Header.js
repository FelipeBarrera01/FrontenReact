import React, { useContext } from "react";
import {CRMContext} from '../../context/CRMContext';
import {withRouter} from 'react-router-dom';
const Header = (props) => {
    const [auth, guardarAuth] = useContext(CRMContext);
    const cerrarSesion = () =>{
        guardarAuth({
            token: '',
            auth: false
        });
        localStorage.setItem('token', '');
        props.history.push('/iniciar-sesion');
    }
        return(
  <header className="barra">
    <div className="contenedor">
      <div>
        <h1>CRM - Administrador de Clientes</h1>
        {auth.auth ? (
            <button type="button" className="far fa-times-circle">
            Cerrar sesión
          </button>
        ):null}
        
      </div>
    </div>
  </header>
  )
};
export default withRouter(Header);
