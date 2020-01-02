import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import clienteAxios from '../../config/axios';
import {Swal} from 'sweetalert2';

function Producto({producto}){

    const {_id, nombre, precio, imagen } = producto;
    const eliminarProducto = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Un producto eliminado no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'No, cancelar'
          }).then((result) => {
            if (result.value) {
                clienteAxios.delete(`/productos/${id}`).then(res=>{
                    if(res.status === 200){
                        Swal.fire(
                            'Deleted!',
                            res.data.mensaje,
                            'success'
                          ) 
                    }
                });
             
            }
          })
    }
    return (
        <Fragment>
                <li className="producto">
        <div clasNames="info-producto">
            <p className="nombre">{nombre}</p>
    <p className="precio">{precio}</p>
    {
     imagen ? (
         <img src={`http://localhost:5000/${imagen}`}/>   
    ): null
    
    }
          
        </div>
        <div className="acciones">
            <Link to={`/productos/editar/${_id}`} className="btn btn-azul">
                <i className="fas fa-pen-alt"></i>
                Editar Producto
            </Link>

            <button type="button" className="btn btn-rojo btn-eliminar" onClick={() => eliminarProducto(_id)}>
                <i className="fas fa-times"></i>
                Eliminar Cliente
            </button>
        </div>
    </li>
    <li className="producto">
        <div className="info-producto">
            <p className="nombre">AngularJS</p>
            <p className="precio">$25.00 </p>
            <img src="img/2.jpg"/>
        </div>
        <div className="acciones">
            <a href="#" className="btn btn-azul">
                <i className="fas fa-pen-alt"></i>
                Editar Producto
            </a>

            <button type="button" className="btn btn-rojo btn-eliminar">
                <i className="fas fa-times"></i>
                Eliminar Producto
            </button>
        </div>
    </li>
    <li className="producto">
        <div className="info-producto">
            <p className="nombre">ReactJS</p>
            <p className="precio">$25.00 </p>
            <img src="img/3.jpg"/>
        </div>
        <div className="acciones">
            <a href="#" className="btn btn-azul">
                <i className="fas fa-pen-alt"></i>
                Editar Producto
            </a>

            <button type="button" className="btn btn-rojo btn-eliminar">
                <i className="fas fa-times"></i>
                Eliminar Producto
            </button>
        </div>
    </li>
        </Fragment>
    

    )
}
export default Producto;