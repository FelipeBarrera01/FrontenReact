import React, {useEffect, useState, Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import clienteAxios from '../../config/axios';
import Producto from './Producto';
import {CRMContext} from '../../context/CRMContext';
function Productos(props){
    const [auth, guardarAuth] = useContext(CRMContext);
    const [productos, guardarProductos] = useState(
        []
    );
    useEffect(() => {
        if(auth.token !=  ''){

        
        const consultarAPI = async () => {
            try {
                const productosConsulta = await clienteAxios.get('/productos',{
                    headers:{
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                guardarProductos(productosConsulta.data);
            } catch (error) {
                if(error.response.status = 500){
                    props.history.push('/iniciar-sesion')
                }
            }

        }
        consultarAPI();
    }else{

    props.history.push('/inciar-sesion');
    }
    }, [productos]);
    if(!auth.auth){
        props.history.push('/iniciar-sesion');
    } 
    return(
        <Fragment>
            <h2>Productos</h2>
            <Link to={'/productos/nuevo'} className="btn btn-verde nvo-cliente">
                 <i className="fas fa-plus-circle"></i>
                Nuevo Producto
            </Link>

            <ul clasNames="listado-productos">
              {productos.map(producto =>(
                  <Producto
                   key={producto._id}
                   producto={producto}
                   />
                   
              ))}
            </ul>
        </Fragment>
    )
}
export default Productos;